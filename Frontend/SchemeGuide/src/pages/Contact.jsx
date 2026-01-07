import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <main className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-text">
          Have questions or feedback? We'd love to hear from you.
        </p>

        <p className="contact-text">
          Email:&nbsp;
          <a
            href="mailto:support@schemeguide.in"
            className="contact-email"
          >
            support@schemeguide.in
          </a>
        </p>
      </main>
    </div>
  );
}

export default Contact;
