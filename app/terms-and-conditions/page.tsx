import LegalPageLayout from "@/components/layout/LegalPageLayout";

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      description="Please read these terms carefully before using Kiddo."
    >
      <div className="space-y-10 text-gray-700">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using Kiddo, you agree to these
            Terms & Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            2. Educational Purpose
          </h2>
          <p>
            Kiddo provides educational stories, printables and
            parenting content for informational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            3. Intellectual Property
          </h2>
          <p>
            All content, illustrations, printables and designs
            belong to Kiddo unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            4. Printable Downloads
          </h2>
          <p>
            Printables are provided for personal and classroom use
            unless otherwise specified. Redistribution or resale is
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            5. User Conduct
          </h2>
          <p>
            Users agree not to misuse the website, attempt
            unauthorized access or disrupt services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            6. Third-Party Links
          </h2>
          <p>
            Kiddo may contain links to third-party websites.
            We are not responsible for their content or practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            Kiddo is provided "as is" without warranties.
            We are not liable for any damages resulting from use
            of the website.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          Last Updated: June 2026
        </section>

      </div>
    </LegalPageLayout>
  );
}