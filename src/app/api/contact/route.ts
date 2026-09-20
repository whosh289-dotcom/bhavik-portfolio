import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // In Cloudflare OpenNext/next-on-pages, bindings are exposed globally or via process.env
    // We expect a D1 database binding named "DB"
    const db = (process.env.DB || (globalThis as any).env?.DB) as any;

    if (!db) {
      console.error("Database binding not found");
      return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    // Insert into D1
    await db
      .prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)")
      .bind(name, email, message)
      .run();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Failed to submit contact form:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
