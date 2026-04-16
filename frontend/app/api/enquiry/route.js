export const runtime = "nodejs";

import nodemailer from "nodemailer";

function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value, max = 200) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function getTransportConfig() {
  const user = process.env.OUTLOOK_SMTP_USER;
  const pass = process.env.OUTLOOK_SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return {
    host: process.env.OUTLOOK_SMTP_HOST || "smtp.office365.com",
    port: Number(process.env.OUTLOOK_SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  };
}

function buildEmailHtml(payload, timeOnPageMs) {
  const rows = [
    ["Student First Name", payload.studentFirstName],
    ["Student Last Name", payload.studentLastName],
    ["Year Group / Grade", payload.yearGroup],
    ["School Name", payload.schoolName],
    ["Parent First Name", payload.parentFirstName],
    ["Parent Last Name", payload.parentLastName],
    ["Phone Number", payload.phone],
    ["Email", payload.email],
    ["How they heard about us", payload.heardFrom],
    ["Submitted At", payload.submittedAt],
    ["Time on page before submit", `${Math.max(0, Math.round((timeOnPageMs || 0) / 1000))} seconds`],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;background:#f8fafc;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;">${value || "-"}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;">
      <h2 style="margin-bottom:16px;">New Improve ME enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;margin-bottom:20px;">
        ${tableRows}
      </table>
      <h3 style="margin:0 0 8px;">Support needed</h3>
      <div style="padding:12px;border:1px solid #e5e7eb;background:#f8fafc;white-space:pre-wrap;">${payload.message || "-"}</div>
    </div>
  `;
}

function buildEmailText(payload, timeOnPageMs) {
  return [
    "New Improve ME enquiry",
    "",
    `Student First Name: ${payload.studentFirstName || "-"}`,
    `Student Last Name: ${payload.studentLastName || "-"}`,
    `Year Group / Grade: ${payload.yearGroup || "-"}`,
    `School Name: ${payload.schoolName || "-"}`,
    `Parent First Name: ${payload.parentFirstName || "-"}`,
    `Parent Last Name: ${payload.parentLastName || "-"}`,
    `Phone Number: ${payload.phone || "-"}`,
    `Email: ${payload.email || "-"}`,
    `How they heard about us: ${payload.heardFrom || "-"}`,
    `Submitted At: ${payload.submittedAt}`,
    `Time on page before submit: ${Math.max(0, Math.round((timeOnPageMs || 0) / 1000))} seconds`,
    "",
    "Support needed:",
    payload.message || "-",
  ].join("\n");
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
    const timeOnPageMs = Number(body?.timeOnPageMs || 0);

    if (!payload.studentFirstName || !payload.parentFirstName || !payload.phone || !payload.email) {
      return Response.json({ ok: false, error: "MISSING_FIELDS" }, { status: 400 });
    }

    if (!isEmail(payload.email)) {
      return Response.json({ ok: false, error: "INVALID_EMAIL" }, { status: 400 });
    }

    const transportConfig = getTransportConfig();
    if (!transportConfig) {
      console.error("[enquiry] missing smtp configuration");
      return Response.json({ ok: false, error: "EMAIL_NOT_CONFIGURED" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport(transportConfig);
    const inboxAddress = process.env.ENQUIRY_TO_EMAIL || "sakshi.ladha@coozmoo.com";
    const fromAddress = process.env.ENQUIRY_FROM_EMAIL || process.env.OUTLOOK_SMTP_USER;

    await transporter.sendMail({
      from: fromAddress,
      to: inboxAddress,
      replyTo: payload.email,
      subject: `New website enquiry from ${payload.parentFirstName} ${payload.parentLastName || ""}`.trim(),
      text: buildEmailText(payload, timeOnPageMs),
      html: buildEmailHtml(payload, timeOnPageMs),
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[enquiry] error", error);
    return Response.json({ ok: false, error: "SERVER_ERROR" }, { status: 500 });
  }
}
