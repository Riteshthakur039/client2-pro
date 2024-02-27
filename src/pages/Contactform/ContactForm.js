
import React from "react";
import img from '../../assets/images/contact.avif'
import "./style.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <img
        className="background-image"
        src={img}
        alt="Background"
      />
      <div className="form-container">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
