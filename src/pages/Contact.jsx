import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
    setTimeout(() => setSubmitted(false), 4000); // Auto-hide after 4s
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">📬 Contact Us</h2>

      {submitted && (
        <p className="success-message">✅ Message sent successfully!</p>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
