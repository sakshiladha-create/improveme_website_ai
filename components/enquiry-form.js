export function EnquiryForm() {
  return (
    <div className="white-card overflow-hidden">
      <div className="border-b border-gray-200 px-8 py-6 text-center">
        <h3 className="mb-0 text-[2.1rem] font-bold tracking-[-0.04em] text-navy-900">
          Improve ME Institute Enquiry Form
        </h3>
      </div>
      <form className="space-y-5 px-8 py-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Student Name *" placeholder="Bruce" hint="First Name" />
          <Field label="&nbsp;" placeholder="Wayne" hint="Last Name" />
        </div>
        <Field label="Year Group *" placeholder="Student Year / Grade" select />
        <Field label="School Name *" placeholder="" select hint="Select your child's current school. Choose 'Home schooling' if they don't attend a school, or 'Other' if you're outside the UAE." />
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Parent Name *" placeholder="Thomas" hint="Parent First Name" />
          <Field label="&nbsp;" placeholder="Wayne" hint="Parent Last Name" />
        </div>
        <Field label="Phone Number *" placeholder="+971 551234567" />
        <Field label="Parent's E-mail ID *" placeholder="parent@gmail.com" />
        <Field label="How did you hear about us? *" placeholder="" select />
        <div className="pt-1 text-center">
          <button
            type="submit"
            className="inline-flex rounded-full bg-yellow-400 px-10 py-3 font-semibold text-navy-900 transition-colors hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, placeholder, hint, select = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy-900" dangerouslySetInnerHTML={{ __html: label }} />
      {select ? (
        <select
          className="h-12 w-full rounded border border-gray-300 px-4 text-slate-500 focus:border-navy-600 focus:outline-none"
          suppressHydrationWarning
        >
          <option>{placeholder || "Select"}</option>
        </select>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="h-12 w-full rounded border border-gray-300 px-4 text-slate-700 placeholder:text-slate-400 focus:border-navy-600 focus:outline-none"
          suppressHydrationWarning
        />
      )}
      {hint ? <span className="mt-1 block text-xs text-slate-500">{hint}</span> : null}
    </label>
  );
}
