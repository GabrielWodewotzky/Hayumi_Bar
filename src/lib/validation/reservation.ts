export type ReservationInput = {
  name: string;
  phone: string;
  date: string; // AAAA-MM-DD
  time: string; // HH:MM
  people: number;
  notes: string;
};

export type FieldErrors = Partial<Record<keyof ReservationInput, string>>;

type Result = { ok: true; data: ReservationInput } | { ok: false; errors: FieldErrors };

// usada no formulário (cliente) e na API (servidor), para as duas validarem igual
export function validateReservation(raw: unknown): Result {
  const r = (raw ?? {}) as Record<string, unknown>;
  const name = String(r.name ?? "").trim();
  const phone = String(r.phone ?? "").trim();
  const date = String(r.date ?? "");
  const time = String(r.time ?? "");
  const people = Number(r.people);
  const notes = String(r.notes ?? "").trim();

  const errors: FieldErrors = {};
  const digits = phone.replace(/\D/g, "").length;

  if (name.length < 2 || name.length > 80) errors.name = "Informe seu nome.";
  if (digits < 10 || digits > 13) errors.phone = "Informe um telefone com DDD.";

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    errors.date = "Escolha uma data.";
  } else {
    const d = new Date(`${date}T00:00:00`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (Number.isNaN(d.getTime()) || d < today) errors.date = "Escolha uma data a partir de hoje.";
  }

  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) errors.time = "Escolha um horário.";
  if (!Number.isInteger(people) || people < 1 || people > 12) errors.people = "De 1 a 12 pessoas.";
  if (notes.length > 300) errors.notes = "No máximo 300 caracteres.";

  return Object.keys(errors).length
    ? { ok: false, errors }
    : { ok: true, data: { name, phone, date, time, people, notes } };
}