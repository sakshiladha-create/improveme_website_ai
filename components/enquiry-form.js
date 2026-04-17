"use client";

import { useMemo, useState } from "react";

const heardFromOptions = ["Google Search", "Instagram", "Facebook", "School", "Friend / Family", "Other"];
const initialValues = {
  studentFirstName: "",
  studentLastName: "",
  yearGroup: "",
  schoolName: "",
  parentFirstName: "",
  parentLastName: "",
  phone: "",
  email: "",
  heardFrom: "",
  message: "",
  website: "",
};

function getSubmissionErrorMessage(code) {
  switch (code) {
    case "EMAIL_NOT_CONFIGURED":
      return "Email sending is not configured yet. Add your Outlook SMTP email settings and redeploy.";
    case "INVALID_EMAIL":
      return "Please enter a valid email address.";
    case "MISSING_FIELDS":
      return "Please complete the required fields.";
    case "GOOGLE_SHEETS_NOT_CONFIGURED":
      return "The enquiry form is not configured yet. Please add the Google Sheets environment variables and redeploy.";
    case "GOOGLE_SHEETS_APPEND_FAILED":
      return "We could not save your enquiry to Google Sheets. Please check the sheet settings and try again.";
    default:
      return "Something went wrong. Please call us or try again in a moment.";
  }
}

export function EnquiryForm() {
  const startedAt = useMemo(() => Date.now(), []);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [error, setError] = useState("");
  const [values, setValues] = useState(initialValues);

  async function onSubmit(event) {
    event.preventDefault();
    setError("");

    if (status === "submitting") return;

    if (!values.studentFirstName || !values.parentFirstName || !values.phone || !values.email) {
      setError("Please complete the required fields.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData(event.currentTarget);
      const formValues = Object.fromEntries(formData.entries());

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          studentFirstName: formValues.studentFirstName || "",
          studentLastName: formValues.studentLastName || "",
          yearGroup: formValues.yearGroup || "",
          schoolName: formValues.schoolName || "",
          parentFirstName: formValues.parentFirstName || "",
          parentLastName: formValues.parentLastName || "",
          phone: formValues.phone || "",
          email: formValues.email || "",
          source: formValues.heardFrom || "",
          supportNeeded: formValues.message || "",
          website: formValues.website || "",
          timeOnPageMs: Date.now() - startedAt,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "SUBMISSION_FAILED");
      }

      if (typeof window !== "undefined" && Array.isArray(window.dataLayer)) {
        window.dataLayer.push({
          event: "enquiry_submit",
          form: "enquiry",
        });
      }

      setValues(initialValues);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(getSubmissionErrorMessage(err?.message));
    }
  }

  function setField(key) {
    return (event) => {
      const value = event.target.value;
      setValues((prev) => ({ ...prev, [key]: value }));
    };
  }

  return (
    <div className="white-card overflow-hidden">
      <div className="border-b border-gray-200 px-8 py-6 text-center">
        <h3 className="mb-0 text-[2.1rem] font-bold tracking-[-0.04em] text-navy-900">
          Improve ME Institute Enquiry Form
        </h3>
      </div>

      {status === "success" ? (
        <div className="space-y-4 px-8 py-8 text-center">
          <p className="mb-0 text-[1.2rem] font-bold text-navy-900">Thanks, we&apos;ve received your enquiry.</p>
          <p className="mb-0 text-sm leading-7 text-slate-600">
            A confirmation email is on its way to your inbox, and our team aims to reply within two working hours. If it&apos;s urgent,
            call the centre on{" "}
            <a className="font-semibold text-navy-900 underline" href="tel:+97143805525">
              +971 4 380 5525
            </a>
            .
          </p>
        </div>
      ) : (
        <form className="space-y-5 px-8 py-6" onSubmit={onSubmit} noValidate>
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            name="website"
            value={values.website}
            onChange={setField("website")}
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="studentFirstName"
              label="Student First Name *"
              placeholder="Bruce"
              value={values.studentFirstName}
              onChange={setField("studentFirstName")}
              required
            />
            <Field
              name="studentLastName"
              label="Student Last Name"
              placeholder="Wayne"
              value={values.studentLastName}
              onChange={setField("studentLastName")}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="yearGroup"
              label="Year Group / Grade"
              placeholder="e.g. Year 6"
              value={values.yearGroup}
              onChange={setField("yearGroup")}
            />
            <Field
              name="schoolName"
              label="School Name"
              placeholder="e.g. Dubai College"
              value={values.schoolName}
              onChange={setField("schoolName")}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="parentFirstName"
              label="Parent First Name *"
              placeholder="Thomas"
              value={values.parentFirstName}
              onChange={setField("parentFirstName")}
              required
            />
            <Field
              name="parentLastName"
              label="Parent Last Name"
              placeholder="Wayne"
              value={values.parentLastName}
              onChange={setField("parentLastName")}
            />
          </div>

          <Field
            name="phone"
            label="Phone Number *"
            placeholder="+971 551234567"
            value={values.phone}
            onChange={setField("phone")}
            required
            inputMode="tel"
          />
          <Field
            name="email"
            label="Email *"
            placeholder="parent@gmail.com"
            value={values.email}
            onChange={setField("email")}
            required
            inputMode="email"
          />

          <SelectField
            name="heardFrom"
            label="How did you hear about us?"
            value={values.heardFrom}
            onChange={setField("heardFrom")}
            options={heardFromOptions}
          />

          <TextAreaField
            name="message"
            label="What support does your child need?"
            placeholder="Subjects, curriculum, exam board, goals, and any deadlines."
            value={values.message}
            onChange={setField("message")}
          />

          {status === "error" && error ? (
            <p className="mb-0 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
          ) : null}

          <div className="pt-1 text-center">
            <button
              type="submit"
              className="inline-flex rounded-full bg-yellow-400 px-10 py-3 font-semibold text-navy-900 transition-colors hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  value,
  onChange,
  required = false,
  inputMode,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy-900">{label}</span>
      <input
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        inputMode={inputMode}
        className="h-12 w-full rounded border border-gray-300 px-4 text-slate-700 placeholder:text-slate-400 focus:border-navy-600 focus:outline-none"
      />
    </label>
  );
}

function SelectField({ name, label, value, onChange, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy-900">{label}</span>
      <select
        name={name}
        className="h-12 w-full rounded border border-gray-300 bg-white px-4 text-slate-700 focus:border-navy-600 focus:outline-none"
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({ name, label, placeholder, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy-900">{label}</span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded border border-gray-300 px-4 py-3 text-slate-700 placeholder:text-slate-400 focus:border-navy-600 focus:outline-none"
      />
    </label>
  );
}
