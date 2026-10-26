"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { Loader } from "@/components/ui/loader";
import { whatsappUrl } from "@/config/site";
import { validateReservation } from "@/lib/validation/reservation";
import type { FieldErrors } from "@/lib/validation/reservation";

const TIMES = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

type Status = "idle" | "sending" | "ok" | "unavailable" | "error";

const field =
  "mt-2 w-full rounded-2xl border border-washi/25 bg-surface px-4 py-3 text-washi placeholder:text-washi/40 focus:border-shu focus:outline-none";
const label = "block font-semibold";
const errorText = "mt-1 text-sm text-[#ff8a6c]";

export function ReservationForm() {
  const [values, setValues] = useState({ name: "", phone: "", date: "", time: "20:00", people: "2", notes: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [minDate, setMinDate] = useState("");

  // data mínima = hoje (calculada no cliente para não divergir do servidor)
  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const result = validateReservation(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (res.ok) setStatus("ok");
      else if (res.status === 501) setStatus("unavailable");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const waText = `Olá! Quero reservar para ${values.people} pessoa(s) no dia ${values.date} às ${values.time}. Nome: ${values.name}.`;

  if (status === "ok") {
    return (
      <p role="status" className="rounded-3xl bg-surface p-8 text-xl">
        Pedido enviado! Em breve confirmamos sua reserva pelo telefone.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div>
        <label htmlFor="r-name" className={label}>Nome</label>
        <input id="r-name" className={field} value={values.name} onChange={set("name")} autoComplete="name" aria-invalid={!!errors.name} />
        {errors.name && <p className={errorText}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="r-phone" className={label}>Telefone com DDD</label>
        <input id="r-phone" className={field} value={values.phone} onChange={set("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(11) 90000-0000" aria-invalid={!!errors.phone} />
        {errors.phone && <p className={errorText}>{errors.phone}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="r-date" className={label}>Data</label>
          <input id="r-date" className={field} value={values.date} onChange={set("date")} type="date" min={minDate} aria-invalid={!!errors.date} />
          {errors.date && <p className={errorText}>{errors.date}</p>}
        </div>
        <div>
          <label htmlFor="r-time" className={label}>Horário</label>
          <select id="r-time" className={field} value={values.time} onChange={set("time")}>
            {TIMES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && <p className={errorText}>{errors.time}</p>}
        </div>
        <div>
          <label htmlFor="r-people" className={label}>Pessoas</label>
          <select id="r-people" className={field} value={values.people} onChange={set("people")}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {errors.people && <p className={errorText}>{errors.people}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="r-notes" className={label}>Observações (opcional)</label>
        <textarea id="r-notes" className={field} rows={3} value={values.notes} onChange={set("notes")} maxLength={300} />
        {errors.notes && <p className={errorText}>{errors.notes}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-3 rounded-full bg-shu px-8 py-4 font-semibold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97] disabled:opacity-70"
        >
          {status === "sending" && <Loader size={20} label="Enviando" />}
          Enviar pedido de reserva
        </button>
      </div>

      <div aria-live="polite">
        {status === "unavailable" && (
          <p className="rounded-3xl bg-surface p-5">
            As reservas online ainda não estão disponíveis.{" "}
            <a href={whatsappUrl(waText)} target="_blank" rel="noopener noreferrer" className="font-semibold text-shu underline underline-offset-4">
              Reserve pelo WhatsApp
            </a>
            .
          </p>
        )}
        {status === "error" && <p className="text-[#ff8a6c]">Não foi possível enviar agora. Tente de novo em instantes.</p>}
      </div>
    </form>
  );
}