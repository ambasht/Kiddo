import LegalPageLayout from "@/components/layout/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      description="Learn how Kiddo collects, uses and protects your information."
    >

      <div className="space-y-10 text-gray-700">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            1. Introduction
          </h2>

          <p>
            Welcome to Kiddo. We value your privacy and are committed
            to protecting your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            2. Information We Collect
          </h2>

          <p>
            We may collect information when you subscribe to our
            newsletter, download printable resources or contact us.
          </p>

          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Email address</li>
            <li>Basic analytics information</li>
            <li>Cookies and usage data</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            3. How We Use Your Information
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Send printable resources and newsletters</li>
            <li>Improve website performance</li>
            <li>Respond to enquiries</li>
            <li>Provide a better user experience</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            4. Cookies
          </h2>

          <p>
            Kiddo may use cookies and similar technologies to improve
            website functionality and understand visitor behaviour.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            5. Third-Party Services
          </h2>

          <p>
            We may use third-party services such as analytics providers,
            email delivery platforms and advertising partners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            6. Children's Privacy
          </h2>

          <p>
            Kiddo is designed for families and parents. We do not
            knowingly collect personal information directly from
            children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            7. Your Rights
          </h2>

          <p>
            You may request access to, correction of or deletion of
            your personal information by contacting us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            8. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy,
            please contact us through our Contact page.
          </p>
        </section>

        <section className="border-t pt-6 text-sm text-gray-500">
          Last Updated: June 2026
        </section>

      </div>

    </LegalPageLayout>
  );
}