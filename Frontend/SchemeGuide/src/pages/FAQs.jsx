import "./FAQs.css";

function FAQs() {
  const faqs = [
    {
      q: "Is this an official government website?",
      a: "No. SchemeGuide is an informational tool that sources data from official portals.",
    },
    {
      q: "Do you store my personal data?",
      a: "No. We do not store any personal information you enter.",
    },
    {
      q: "Can I apply for schemes through this site?",
      a: "No. We provide official application links; you apply directly on government portals.",
    },
  ];

  return (
    <div className="faqs-page">
      <main className="faqs-container">
        <h1 className="faqs-title">Frequently Asked Questions</h1>

        <div className="faqs-list">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-card">
              <h3 className="faq-question">{faq.q}</h3>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FAQs;
