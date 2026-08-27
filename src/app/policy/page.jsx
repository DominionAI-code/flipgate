export const metadata = {
  title: "Legal Policy | Flip Corporation Ltd",
  description:
    "Legal policy governing enrollment applications submitted to Flip Corporation Ltd.",
};

export default function LegalPolicyPage() {
  return (
    <main className="bg-[#F4FDF9] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Legal Policy</h1>
        <div className="h-1 w-16 bg-[#00E63A] mb-8 rounded"></div>

        <p className="text-gray-600 leading-relaxed mb-8">
          Flip Corporation Ltd ("the Company") sets out the following terms
          governing the submission and use of information provided through the
          enrollment form. By submitting the form, the applicant agrees to be
          bound by these terms.
        </p>

        <ol className="space-y-6 text-gray-700 leading-relaxed list-decimal list-outside pl-5">
          <li>
            The applicant must ensure that all information supplied in the
            enrollment form is accurate and official.
            <ol className="mt-3 space-y-3 list-[lower-alpha] list-outside pl-5">
              <li>
                Where inaccurate or unofficial information is supplied, the
                applicant is solely liable for any outcome or consequence
                arising from that misinformation.
              </li>
              <li>
                In any circumstance covered under clause 1(a), the Company
                reserves the discretion to withhold or adjust any outstanding
                financial commitment owed to the applicant.
              </li>
            </ol>
          </li>

          <li>
            The Company reserves the right to supply the information provided to
            law enforcement authorities for the purpose of any investigation.
            <ol className="mt-3 space-y-3 list-[lower-alpha] list-outside pl-5">
              <li>
                In any dispute involving the Company, part or all of the
                information supplied in this form may be offered in evidence
                before a court or any other dispute resolution procedure agreed
                upon by the Company and the applicant.
              </li>
            </ol>
          </li>

          <li>
            This form is intended for applicants who are sixteen (16) years of
            age or older. Persons below the age of 16 must not complete or
            submit this form.
          </li>
        </ol>

        <p className="text-sm text-gray-500 mt-10 pt-6 border-t border-gray-100">
          Last updated:{" "}
          {new Date().toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
          })}
        </p>
      </div>
    </main>
  );
}
