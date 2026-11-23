import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, Crosshair } from "./bits";

const SIDE_IMG =
  "https://images.unsplash.com/photo-1717386255773-a456c611dc4e?auto=format&fit=crop&w=1200&q=80";

const FIELDS = [
  { name: "fullName", label: "Full Name", type: "text", placeholder: "e.g. Priya Sharma", testid: "input-full-name" },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "e.g. priya@company.com",
    testid: "input-email-address",
  },
  {
    name: "company",
    label: "Company / College",
    type: "text",
    placeholder: "e.g. Precision Motors Ltd",
    testid: "input-company-college",
  },
  {
    name: "role",
    label: "Job Role",
    type: "text",
    placeholder: "e.g. Production Engineer",
    testid: "input-job-role",
  },
];

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Leadership"];

const validate = (values) => {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.company.trim()) errors.company = "Please enter your company or college.";
  if (!values.role.trim()) errors.role = "Please enter your job role.";
  if (!values.experience) errors.experience = "Please select your experience level.";
  return errors;
};

export default function Registration({ onRegistered }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    experience: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const setField = (name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = validate(values);
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSubmitting(true);
    setTimeout(onRegistered, 900);
  };

  const inputClass = (name) =>
    `w-full border bg-white/[0.04] px-4 py-3.5 text-[15px] text-ivory outline-none transition-colors duration-150 placeholder:text-graphite/60 focus:border-machine ${
      errors[name] ? "border-copper" : "border-white/15"
    }`;

  return (
    <section
      id="register"
      className="tech-grid relative border-b border-white/10 bg-steel py-24 text-ivory lg:py-28"
      data-testid="registration-section"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-16 lg:px-14">
        <div>
          <Reveal>
            <SectionLabel index="05" text="Registration" />
            <h2 className="mt-6 max-w-lg font-display text-[clamp(32px,4.2vw,46px)] font-semibold leading-[1.12] tracking-[-0.01em]">
              YOUR SMART MANUFACTURING JOURNEY STARTS HERE.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ivory/70 lg:text-[17px]">
              One session. New perspectives. Practical possibilities. Reserve your free seat and explore the future
              of manufacturing.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 hidden max-w-md border border-white/10 lg:block" data-testid="registration-side-image">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={SIDE_IMG}
                  alt="AI-generated depiction of operator controlling precision machinery through an industrial touchscreen panel"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute right-2.5 top-2.5 border border-white/10 bg-steel/90 px-2 py-0.5 backdrop-blur-sm">
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[1.5px] text-machine">
                    AI Visual
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[1.5px] text-graphite">
                  Fig. 03 — Machine Control Interface (AI)
                </p>
                <p className="font-mono text-[10px] font-medium tracking-[1.5px] text-machine">Live</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p
              className="mt-10 font-mono text-[11px] font-medium uppercase tracking-[1.5px] leading-loose text-machine"
              data-testid="registration-reassurance"
            >
              Free Registration <span className="text-copper">|</span> Online Event{" "}
              <span className="text-copper">|</span> Joining details shared after registration
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative border border-white/10 bg-[#15242F] p-8 lg:p-10"
            data-testid="registration-form"
          >
            <Crosshair className="-left-1.5 -top-1.5 text-machine/70" />
            <Crosshair className="-right-1.5 -top-1.5 text-machine/70" />
            <Crosshair className="-bottom-1.5 -left-1.5 text-machine/70" />
            <Crosshair className="-bottom-1.5 -right-1.5 text-machine/70" />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <div key={field.name} className={field.name === "fullName" ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-ivory/60"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    value={values[field.name]}
                    onChange={(e) => setField(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className={inputClass(field.name)}
                    data-testid={field.testid}
                  />
                  {errors[field.name] && (
                    <p className="mt-1.5 font-mono text-[11px] tracking-[0.04em] text-copper" data-testid={`error-${field.name}`}>
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="experience"
                  className="mb-2 block font-mono text-[11px] font-medium uppercase tracking-[1.5px] text-ivory/60"
                >
                  Experience Level
                </label>
                <select
                  id="experience"
                  value={values.experience}
                  onChange={(e) => setField("experience", e.target.value)}
                  className={`${inputClass("experience")} cursor-pointer`}
                  style={{ colorScheme: "dark" }}
                  data-testid="select-experience-level"
                >
                  <option value="" className="bg-[#101D27] text-ivory/60">
                    Select your level
                  </option>
                  {LEVELS.map((l) => (
                    <option key={l} value={l} className="bg-[#101D27] text-ivory py-1">
                      {l}
                    </option>
                  ))}
                </select>
                {errors.experience && (
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.04em] text-copper" data-testid="error-experience">
                    {errors.experience}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-8 flex w-full items-center justify-center gap-3 bg-machine py-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-steel transition-colors hover:bg-[#a8cd8f] disabled:opacity-70"
              data-testid="register-submit-button"
            >
              {submitting ? "Confirming…" : "Confirm My Registration"}
              {!submitting && (
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
