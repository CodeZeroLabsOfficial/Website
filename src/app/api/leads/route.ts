import { NextResponse } from "next/server";

const FORMS = new Set(["strategy-call", "demo", "lead-magnet"]);

function asText(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return undefined;
  return trimmed;
}

function fieldsFrom(value: unknown): Record<string, string> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  const out: Record<string, string> = {};
  for (const [key, raw] of Object.entries(value)) {
    if (key.length > 80) return null;
    if (typeof raw !== "string" || raw.length > 4000) return null;
    const trimmed = raw.trim();
    if (trimmed) out[key] = trimmed;
  }
  return out;
}

export async function POST(request: Request) {
  const portal = process.env.PORTAL_URL?.trim().replace(/\/$/, "");
  const secret = process.env.PORTAL_SECRET?.trim();
  if (!portal || !secret) {
    return NextResponse.json(
      { ok: false, message: "Lead intake is not configured." },
      { status: 503 },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  if (!raw || typeof raw !== "object") {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
  const body = raw as Record<string, unknown>;
  const form = asText(body.form, 40);
  const name = asText(body.name, 200);
  const email = asText(body.email, 320);
  if (!form || !FORMS.has(form) || !name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Check the required fields." }, { status: 400 });
  }
  const fields = fieldsFrom(body.fields);
  if (!fields) {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  const payload = {
    form,
    source: "website",
    name,
    email,
    phone: asText(body.phone, 40),
    country: asText(body.country, 120),
    fields,
    pageUrl: asText(body.pageUrl, 2000),
  };

  try {
    const upstream = await fetch(`${portal}/api/public/leads`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify(payload),
    });
    const data = (await upstream.json().catch(() => null)) as { message?: string } | null;
    if (!upstream.ok) {
      const message =
        upstream.status === 429
          ? "Too many requests. Try again shortly."
          : data?.message || "Something went wrong. Try again.";
      return NextResponse.json({ ok: false, message }, { status: upstream.status });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Something went wrong. Try again." },
      { status: 502 },
    );
  }
}
