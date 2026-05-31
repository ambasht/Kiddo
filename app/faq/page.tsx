import LegalPageLayout from "@/components/layout/LegalPageLayout";

const faqs = [
  {
    question: "Are all stories free?",
    answer:
      "Most stories are free to read. Some premium resources may be introduced in the future.",
  },
  {
    question: "Are printables free to download?",
    answer:
      "Yes, many printable resources are available free for personal use.",
  },
  {
    question: "What age group is Kiddo for?",
    answer:
      "Kiddo is designed for children aged 3–10 and their parents.",
  },
  {
    question: "How often is new content added?",
    answer:
      "New stories, printables and parenting resources are added regularly.",
  },
  {
    question: "Can teachers use the printables?",
    answer:
      "Yes, teachers may use them in classrooms unless otherwise specified.",
  },
  {
    question: "How can I receive new resources?",
    answer:
      "Subscribe to our newsletter to receive updates and free activity packs.",
  },
];

export default function FAQPage() {
  return (
    <LegalPageLayout
      title="Frequently Asked Questions"
      description="Find answers to common questions about Kiddo."
    >
      <div className="space-y-6">

        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="bg-orange-50 rounded-2xl p-6 border border-orange-100"
          >
            <h3 className="font-bold text-lg text-gray-900">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-700">
              {faq.answer}
            </p>
          </div>
        ))}

      </div>
    </LegalPageLayout>
  );
}