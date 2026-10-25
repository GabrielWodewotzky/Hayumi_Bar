import { NextResponse } from "next/server";
import { validateReservation } from "@/lib/validation/reservation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Corpo inválido." }, { status: 400 });
  }

  const result = validateReservation(body);
  if (!result.ok) {
    return NextResponse.json({ error: "Dados inválidos.", fields: result.errors }, { status: 400 });
  }

  // Etapa do Supabase: gravar result.data na tabela de reservas.
  return NextResponse.json({ error: "Reservas online ainda não estão disponíveis." }, { status: 501 });
}