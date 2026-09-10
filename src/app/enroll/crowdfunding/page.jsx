"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GateRail from "@/components/GateRail";
import { ArrowRightIcon } from "@/components/icons";

// TODO: if you'd like crowdfunding submissions to arrive as a separate
// Formspree form (rather than mixed in with the general enrollment form),
// create a second form at formspree.io and swap this endpoint.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpgzbrq";

const initialState = {
  fullName: "",
  address: "",
  nationality: "",
  stateOfOrigin: "",
  lga: "",
  gender: "",
  age: "",
  raisingType: "",
  projectDetails: "",
  projectPurpose: "",
  projectLocation: "",
  startDate: "",
  completionDate: "",
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

export default function CrowdfundingEnrollPage() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState(initialState);

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
          Thank you for submitting your crowdfunding application. Our team will
          review your project details and reach out with next steps.
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
          { label: "Crowdfunding", href: "/programs/crowdfunding" },
          { label: "Enroll" },
        ]}
      />

      <div className="mt-6 mb-10 text-center">
        <GateRail className="justify-center mb-6" />
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">
          Crowdfunding Application
        </h1>
        <p className="text-gray-600">
          Tell us about yourself and your project. All fields are required
          unless marked optional.
        </p>
        <p className="text-sm text-gray-500 mt-3">
          Applying under{" "}
          <Link
            href="/programs/crowdfunding"
            className="text-[#046A55] font-medium underline"
          >
            Crowdfunding
          </Link>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* 1. Personal Details */}
        <div>
          <SectionHeading number={1}>Personal Details</SectionHeading>
          <div className="space-y-5">
            <Field label="Name">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="State of Origin">
                <input
                  type="text"
                  name="stateOfOrigin"
                  required
                  value={form.stateOfOrigin}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="LGA">
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

        {/* 2. Project Details */}
        <div>
          <SectionHeading number={2}>Project Details</SectionHeading>
          <div className="space-y-5">
            <Field label="Are you raising money or resources?">
              <select
                name="raisingType"
                required
                value={form.raisingType}
                onChange={handleChange}
                className={`${inputClass} bg-white`}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Money">Money</option>
                <option value="Resources">Resources</option>
                <option value="Both">Both</option>
              </select>
            </Field>

            <Field label="Details of Project">
              <textarea
                name="projectDetails"
                required
                rows={4}
                value={form.projectDetails}
                onChange={handleChange}
                className={inputClass}
                placeholder="Describe the project you're raising funds or resources for"
              />
            </Field>

            <Field label="Purpose of Project">
              <textarea
                name="projectPurpose"
                required
                rows={3}
                value={form.projectPurpose}
                onChange={handleChange}
                className={inputClass}
                placeholder="What problem does this project solve, and who benefits?"
              />
            </Field>

            <Field label="Location of Project">
              <input
                type="text"
                name="projectLocation"
                required
                value={form.projectLocation}
                onChange={handleChange}
                className={inputClass}
              />
            </Field>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Project Start Time">
                <input
                  type="date"
                  name="startDate"
                  required
                  value={form.startDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>

              <Field label="Expected Completion Time">
                <input
                  type="date"
                  name="completionDate"
                  required
                  value={form.completionDate}
                  onChange={handleChange}
                  className={inputClass}
                />
              </Field>
            </div>
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
