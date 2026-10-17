import { NextResponse } from "next/server";

// Etapa futura: validar o corpo e gravar a reserva no Supabase.
export async function POST() {
  return NextResponse.json({ error: "Não implementado" }, { status: 501 });
}
