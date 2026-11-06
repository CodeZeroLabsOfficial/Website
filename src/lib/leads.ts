export type LeadFormId = "strategy-call" | "demo" | "lead-magnet";

export type LeadPayload = {
  form: LeadFormId;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  fields?: Record<string, string>;
  pageUrl?: string;
};

export async function submitLead(
  payload: LeadPayload,
): Promise<{ ok: true } | { ok: false; message: string }> {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await response.json().catch(() => null)) as { message?: string } | null;
    if (!response.ok) {
      return { ok: false, message: data?.message || "Something went wrong. Try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, message: "Something went wrong. Try again." };
  }
}
