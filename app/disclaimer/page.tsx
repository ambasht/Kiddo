import LegalPageLayout from "@/components/layout/LegalPageLayout";

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Disclaimer"
      description="Important information regarding the use of Kiddo."
    >
      <div className="space-y-10 text-gray-700">

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Educational Content
          </h2>

          <p>
            The content on Kiddo is provided for educational and
            informational purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            No Professional Advice
          </h2>

          <p>
            Parenting tips, educational guidance and healthy food
            content should not be considered professional medical,
            legal or educational advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Content Accuracy
          </h2>

          <p>
            While we strive to keep information accurate and
            up-to-date, we make no guarantees regarding completeness
            or accuracy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            External Links
          </h2>

          <p>
            Kiddo may contain links to external websites. We are not
            responsible for the content, policies or practices of
            those websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">
            Use at Your Own Risk
          </h2>

          <p>
            By using Kiddo, you acknowledge that any reliance on the
            information provided is at your own discretion and risk.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          Last Updated: June 2026
        </section>

      </div>
    </LegalPageLayout>
  );
}