"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { programsList, programs } from "@/lib/programs";
import Breadcrumbs from "@/components/Breadcrumbs";
import GateRail from "@/components/GateRail";
import { ArrowRightIcon } from "@/components/icons";

// TODO: replace with your real Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpgzbrq";

const initialState = {
  fullName: "",
  address: "",
  nationality: "",
  gender: "",
  age: "",
  program: "",
  skill: "",
  stateOfResidence: "",
  lga: "",
  guarantorName: "",
  guarantorAddress: "",
  guarantorPhone: "",
  nokName: "",
  nokAddress: "",
  nokPhone: "",
};

function SectionHeading({ number, children }) {
  return (
    <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-200">
      <span className="w-7 h-7 rounded-full bg-[#046A55] text-white text-xs font-bold flex items-center justify-center shrink-0">
        {number}
      </span>
      <h2 className="text-sm font-bold text-[#046A55] uppercase tracking-wider">
        {children}
      </h2>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00E63A] focus:border-transparent";

function EnrollForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("program") || "";
  const originProgram = programs[preselected];

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({ ...initialState, program: preselected });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;

    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialState);
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto text-center py-24 px-4">
        <GateRail className="justify-center mb-6" />
        <h1 className="text-2xl font-bold text-[#046A55] mb-4">
          Application Received
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for enrolling. Our team will review your details and reach
          out with next steps shortly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#046A55] hover:bg-[#00E63A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...(originProgram
            ? [
                {
                  label: originProgram.navTitle,
                  href: `/programs/${originProgram.slug}`,
                },
              ]
            : []),
          { label: "Enroll" },
        ]}
      />

      <div className="mt-6 mb-10 text-center">
        <GateRail className="justify-center mb-6" />
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
          Enrollment Form
        </h1>
        <p className="text-gray-600">
          Please fill in your details accurately. All fields are required unless
          marked optional.
        </p>
        {originProgram && (
          <p className="text-sm text-gray-500 mt-3">
            Applying for{" "}
            <Link
              href={`/programs/${originProgram.slug}`}
              className="text-[#046A55] font-medium underline"
            >
              {originProgram.navTitle}
            </Link>
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 1. Personal Details */}
        <div>
          <SectionHeading number={1}>Personal Details</SectionHeading>
          <div className="space-y-5">
            <Field label="Full Name">
              <input
                type="text"
                name="fullName"
                required
                value={form.fullName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Address">
              <input
                type="text"
                name="address"
                required
                value={form.address}
                onChange={handleChange}
                className={inputClass}
                placeholder="Street address"
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nationality">
                <input
                  type="text"
                  name="nationality"
                  required
                  value={form.nationality}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Age">
                <input
                  type="number"
                  name="age"
                  min="1"
                  required
                  value={form.age}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Gender">
              <select
                name="gender"
                required
                value={form.gender}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </Field>
          </div>
        </div>

        {/* 2. Location */}
        <div>
          <SectionHeading number={2}>Location</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="State of Residence">
              <input
                type="text"
                name="stateOfResidence"
                required
                value={form.stateOfResidence}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="LGA of Residence">
              <input
                type="text"
                name="lga"
                required
                value={form.lga}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {/* 3. Program */}
        <div>
          <SectionHeading number={3}>Area of Specialisation</SectionHeading>
          <div className="space-y-5">
            <Field label="Program of Interest">
              <select
                name="program"
                required
                value={form.program}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                <option value="" disabled>
                  Select a program
                </option>
                {programsList.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.navTitle}
                  </option>
                ))}
              </select>
            </Field>

            {form.program === "training" && (
              <Field label="Trade / Skill">
                <select
                  name="skill"
                  required
                  value={form.skill}
                  onChange={handleChange}
                  className={`${inputClass} bg-white`}
                >
                  <option value="" disabled>
                    Select a trade
                  </option>
                  {programs.training.skills.map((s) => (
                    <option key={s.name} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </Field>
            )}
          </div>
        </div>

        {/* 4. Guarantor */}
        <div>
          <SectionHeading number={4}>Guarantor's Details</SectionHeading>
          <div className="space-y-5">
            <Field label="Guarantor's Name">
              <input
                type="text"
                name="guarantorName"
                required
                value={form.guarantorName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Guarantor's Address">
              <input
                type="text"
                name="guarantorAddress"
                required
                value={form.guarantorAddress}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Guarantor's Phone Number">
              <input
                type="tel"
                name="guarantorPhone"
                required
                value={form.guarantorPhone}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {/* 5. Next of Kin */}
        <div>
          <SectionHeading number={5}>
            Next of Kin / Emergency Contact
          </SectionHeading>
          <div className="space-y-5">
            <Field label="Contact's Name">
              <input
                type="text"
                name="nokName"
                required
                value={form.nokName}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Contact's Address">
              <input
                type="text"
                name="nokAddress"
                required
                value={form.nokAddress}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <Field label="Contact's Phone Number">
              <input
                type="tel"
                name="nokPhone"
                required
                value={form.nokPhone}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3 pt-2 bg-[#F4FDF9] p-4 rounded-lg border border-gray-100">
          <input
            type="checkbox"
            id="consent"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            required
            className="mt-1 h-4 w-4 rounded border-gray-300 text-[#046A55] focus:ring-[#00E63A]"
          />
          <label htmlFor="consent" className="text-sm text-gray-600">
            I confirm that I am 16 years of age or older, that the information
            provided above is accurate, and I have read and agree to the{" "}
            <a
              href="/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#046A55] underline"
            >
              Legal Policy
            </a>
            .
          </label>
        </div>

        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong submitting your form. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={!consent || status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#046A55] hover:bg-[#00E63A] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-lg transition-colors"
        >
          {status === "submitting" ? "Submitting..." : "Submit Application"}
          {status !== "submitting" && <ArrowRightIcon className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={null}>
      <EnrollForm />
    </Suspense>
  );
}
