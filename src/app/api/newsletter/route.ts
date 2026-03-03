import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: email.toLowerCase().trim() });

    if (error?.code === "23505") {
      return NextResponse.json({ message: "Ya estás suscrito" });
    }

    if (error) throw error;

    return NextResponse.json({ message: "¡Suscrito!" });
  } catch {
    return NextResponse.json(
      { error: "Error al suscribir" },
      { status: 500 }
    );
  }
}
