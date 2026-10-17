# Kamado

Site de um restaurante japonês. Next.js (App Router) + React + Tailwind CSS v4 + TypeScript.

## Rodar
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Estrutura
- `src/app`: rotas (App Router) e API routes
- `src/components/ui`: peças básicas (botão, input)
- `src/components/layout`: header, footer
- `src/components/sections`: blocos das páginas (hero, sobre, menu)
- `src/components/motion`: animações reutilizáveis
- `src/features`: regras por domínio (menu, reservations)
- `src/lib`: clientes e utilitários (supabase, utils)
- `src/config`: constantes do site
- `supabase/seed.sql`: banco para treinar SQL

## Etapas
1. Esqueleto e estrutura (esta)
2. Design system e hero
3. Seções, animações e mídia
4. Supabase: cardápio e reservas
5. SEO, performance e deploy
