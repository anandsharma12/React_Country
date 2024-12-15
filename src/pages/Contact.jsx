import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="enter your name"
            className="form-control"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            className="form-control"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
