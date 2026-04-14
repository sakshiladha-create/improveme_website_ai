export const runtime = "nodejs";

function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value, max = 200) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return Response.json({ ok: false, error: "INVALID_CONTENT_TYPE" }, { status: 415 });
    }

    let body = null;
    try {
      body = await request.json();
    } catch {
      return Response.json({ ok: false, error: "INVALID_JSON" }, { status: 400 });
    }
    const honeypot = clean(body?.website, 120);
    if (honeypot) {
      return Response.json({ ok: true }, { status: 200 });
    }

    const payload = {
      studentFirstName: clean(body?.studentFirstName, 80),
      studentLastName: clean(body?.studentLastName, 80),
      yearGroup: clean(body?.yearGroup, 60),
      schoolName: clean(body?.schoolName, 120),
      parentFirstName: clean(body?.parentFirstName, 80),
      parentLastName: clean(body?.parentLastName, 80),
      phone: clean(body?.phone, 40),
      email: clean(body?.email, 120),
      heardFrom: clean(body?.heardFrom, 80),
      message: clean(body?.message, 800),
      submittedAt: new Date().toISOString(),
    };

    if (!payload.studentFirstName || !payload.parentFirstName || !payload.phone || !payload.email) {
      return Response.json({ ok: false, error: "MISSING_FIELDS" }, { status: 400 });
    }

    if (!isEmail(payload.email)) {
      return Response.json({ ok: false, error: "INVALID_EMAIL" }, { status: 400 });
    }

    // Hook point: send to email/CRM (Resend, SendGrid, HubSpot, etc).
    // For now, log server-side so enquiries are visible in hosting logs.
    console.log("[enquiry] submission", payload);

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[enquiry] error", error);
    return Response.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}

