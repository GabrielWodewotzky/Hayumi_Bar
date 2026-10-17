-- Kamado: banco para treinar SQL no Supabase (Postgres)
-- Como usar: Supabase > SQL Editor > New query > cole tudo > Run

drop table if exists order_items, orders, reservations, dishes, customers, categories cascade;

create table categories (
  id serial primary key,
  name text not null unique
);

create table dishes (
  id serial primary key,
  category_id int not null references categories(id),
  name text not null,
  price numeric(8,2) not null check (price > 0),
  cost numeric(8,2) not null check (cost > 0),
  is_active boolean not null default true
);

create table customers (
  id serial primary key,
  name text not null,
  email text unique,
  city text not null default 'São Paulo',
  created_at date not null
);

create table reservations (
  id serial primary key,
  customer_id int not null references customers(id),
  reserved_for timestamp not null,
  party_size int not null check (party_size between 1 and 12),
  status text not null check (status in ('confirmada','cancelada','compareceu','no_show'))
);

create table orders (
  id serial primary key,
  customer_id int not null references customers(id),
  ordered_at timestamp not null,
  channel text not null check (channel in ('balcao','salao','delivery'))
);

create table order_items (
  id serial primary key,
  order_id int not null references orders(id) on delete cascade,
  dish_id int not null references dishes(id),
  quantity int not null check (quantity > 0)
);

create index on orders (customer_id);
create index on orders (ordered_at);
create index on order_items (order_id);
create index on order_items (dish_id);

-- Dados base
insert into categories (name) values
  ('Sashimi e nigiri'), ('Brasa'), ('Ramen'), ('Entradas'), ('Bebidas'), ('Sobremesas');

insert into dishes (category_id, name, price, cost) values
  (1, 'Sashimi do dia', 68, 29), (1, 'Nigiri de salmão', 42, 15), (1, 'Omakase no balcão', 240, 95),
  (2, 'Yakitori misto', 54, 18), (2, 'Salmão maçaricado', 58, 22), (2, 'Legumes na brasa', 32, 9),
  (3, 'Ramen kamado', 62, 20), (3, 'Ramen vegetariano', 54, 16),
  (4, 'Gyoza de porco', 36, 11), (4, 'Edamame', 22, 5), (4, 'Tempurá de legumes', 34, 10),
  (5, 'Sake gelado', 38, 16), (5, 'Chá verde', 12, 2), (5, 'Cerveja japonesa', 24, 10),
  (6, 'Mochi de matcha', 26, 7), (6, 'Sorvete de gergelim preto', 24, 6);

-- Clientes (300) e pedidos (2000) gerados com dados pseudo-aleatórios
insert into customers (name, email, city, created_at)
select 'Cliente ' || g, 'cliente' || g || '@exemplo.com',
       (array['São Paulo','São Paulo','São Paulo','Guarulhos','Osasco','Santo André'])[1 + (g % 6)],
       date '2025-01-01' + (random() * 500)::int
from generate_series(1, 300) g;

insert into orders (customer_id, ordered_at, channel)
select 1 + (random() * 299)::int,
       timestamp '2025-06-01' + (random() * 500) * interval '1 day' + (17 + random() * 6) * interval '1 hour',
       (array['balcao','salao','salao','delivery'])[1 + (g % 4)]
from generate_series(1, 2000) g;

insert into order_items (order_id, dish_id, quantity)
select o.id, 1 + (random() * 15)::int, 1 + (random() * 2)::int
from orders o, generate_series(1, 3);

insert into reservations (customer_id, reserved_for, party_size, status)
select 1 + (random() * 299)::int,
       timestamp '2025-06-01' + (random() * 500) * interval '1 day' + interval '19 hours',
       1 + (random() * 5)::int,
       (array['confirmada','compareceu','compareceu','cancelada','no_show'])[1 + (g % 5)]
from generate_series(1, 600) g;

-- Exercícios (do básico ao avançado)
-- 1. Pratos ativos com margem de lucro, do mais ao menos lucrativo
-- select name, price - cost as margem, round((price - cost) / price * 100, 1) as margem_pct
-- from dishes where is_active order by margem desc;

-- 2. Faturamento por categoria (JOIN + GROUP BY)
-- select c.name, sum(oi.quantity * d.price) as faturamento
-- from order_items oi join dishes d on d.id = oi.dish_id join categories c on c.id = d.category_id
-- group by c.name order by faturamento desc;

-- 3. Faturamento mensal com variação sobre o mês anterior (CTE + window function)
-- with m as (
--   select date_trunc('month', o.ordered_at) as mes, sum(oi.quantity * d.price) as fat
--   from orders o join order_items oi on oi.order_id = o.id join dishes d on d.id = oi.dish_id
--   group by 1)
-- select mes, fat, round((fat / lag(fat) over (order by mes) - 1) * 100, 1) as var_pct from m order by mes;

-- 4. Top 3 pratos de cada categoria (RANK por partição)
-- 5. Clientes que reservaram mas nunca pediram (LEFT JOIN ... IS NULL)
-- 6. Taxa de no_show por dia da semana
-- 7. Ticket médio por canal (balcao, salao, delivery)
-- 8. Clientes recorrentes: mais de 5 pedidos nos últimos 90 dias (HAVING)
