

// import React, { useState } from "react";
// import "./Contact.css";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     setSuccess("Thank you for contacting us! We will get back to you soon.");
//     setForm({ name: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="contact-container">
//       <div className="contact-header">
//         <h2 className="contact-title">Get In Touch</h2>
//         <p className="contact-subtitle">
//           Have questions about our products? We'd love to hear from you.
//           Send us a message and we'll respond as soon as possible.
//         </p>
//       </div>

//       <div className="contact-content">
//         {/* Contact Form */}
//         <div className="contact-form-section">
//           <form onSubmit={handleSubmit} className="contact-form">
//             {success && (
//               <div className="success-message">
//                 <span className="success-icon">✓</span>
//                 {success}
//               </div>
//             )}

//             <div className="form-group">
//               <label htmlFor="name" className="form-label">Full Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Enter your full name"
//                 value={form.name}
//                 onChange={handleChange}
//                 className="form-input"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="email" className="form-label">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email address"
//                 value={form.email}
//                 onChange={handleChange}
//                 className="form-input"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="message" className="form-label">Your Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Tell us how we can help you..."
//                 value={form.message}
//                 onChange={handleChange}
//                 rows={6}
//                 className="form-textarea"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <span className="spinner"></span>
//                   Sending...
//                 </>
//               ) : (
//                 'Send Message'
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Contact Information */}
//         <div className="contact-info-section">
//           <div className="info-card">
//             <h3 className="info-title">Contact Information</h3>
//             <p className="info-description">
//               Reach out to us through any of these channels. Our support team is available 24/7 to assist you.
//             </p>

//             <div className="contact-methods">
//               <div className="contact-method">
//                 <div className="method-icon">📧</div>
//                 <div className="method-details">
//                   <h4>Email Us</h4>
//                   <p>support@myphonehub.com</p>
//                   <span className="method-subtext">We'll reply within 24 hours</span>
//                 </div>
//               </div>

//               <div className="contact-method">
//                 <div className="method-icon">📞</div>
//                 <div className="method-details">
//                   <h4>Call Us</h4>
//                   <p>+91 98765 43210</p>
//                   <span className="method-subtext">Mon-Fri from 9AM to 6PM</span>
//                 </div>
//               </div>

//               <div className="contact-method">
//                 <div className="method-icon">💬</div>
//                 <div className="method-details">
//                   <h4>Live Chat</h4>
//                   <p>Available 24/7</p>
//                   <span className="method-subtext">Instant support</span>
//                 </div>
//               </div>
//             </div>

//             <div className="social-links">
//               <h4 className="social-title">Follow Us</h4>
//               <div className="social-icons">
//                 <a href="#" className="social-link instagram">
//                   <span className="social-icon">📸</span>
//                   Instagram
//                 </a>
//                 <br></br>
//                 <a href="#" className="social-link youtube">
//                   <span className="social-icon">▶</span>
//                   YouTube
//                 </a>
//                 <a href="#" className="social-link twitter">
//                   <span className="social-icon">🐦</span>
//                   Twitter
//                 </a>
//                 <a href="#" className="social-link facebook">
//                   <span className="social-icon">📘</span>
//                   Facebook
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSuccess("Thank you for contacting us! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Have questions about our products? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            {success && (
              <div className="success-message">
                <span className="success-icon">✓</span>
                {success}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us how we can help you..."
                value={form.message}
                onChange={handleChange}
                rows={6}
                className="form-textarea"
                required
              />
            </div>

            <button
              type="submit"
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="info-card">
            <h3 className="info-title">Contact Information</h3>
            <p className="info-description">
              Reach out to us through any of these channels. Our support team is available 24/7 to assist you.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-details">
                  <h4>Email Us</h4>
                  <p>support@myphonehub.com</p>
                  <span className="method-subtext">We'll reply within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-details">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                  <span className="method-subtext">Mon-Fri from 9AM to 6PM</span>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-details">
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                  <span className="method-subtext">Instant support</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}