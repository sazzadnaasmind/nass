import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_x77km6l", "template_5on6scd", form.current, {
        publicKey: "RBihspwWHRyqnFbUl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <form
        id="contact-form"
        ref={form}
        onSubmit={sendEmail}
        method="POST"
      >
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="name"
                type="text"
                placeholder="Your Name*"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="email"
                type="email"
                placeholder="Email Address*"
                required
              />
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="service_type"
                type="text"
                placeholder="Service Type"
                required
              />
            </div>
          </div> */}
          {/* <div className="col-md-6">
            <div className="tp-contact-input">
              <input
                name="phone"
                type="text"
                placeholder="Phone Number"
                required
              />
            </div>
          </div> */}
          <div className="col-md-12">
            <div className="tp-contact-input">
              <textarea
                name="message"
                placeholder="Enter Your Message here"
              ></textarea>
            </div>
          </div>
          <div className="tp-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
