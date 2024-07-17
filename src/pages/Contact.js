import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_va37ur4",
        "template_rkuqgql",
        form.current,
        "2JMyntVVjviLUnMSH"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-container d-flex">
      <div className="col-lg-6 contact-info">
        <h1>Contact</h1>
        <p>
          Get in touch with me via social <br /> media or email.
        </p>
        <div className="social-media">
          <a href="https://www.instagram.com/yasinsherif_2003/">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/yasin-sherif/">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="mailto:yasinsherif2003@gmail.com">
            <FontAwesomeIcon icon={faAt} className="social-icon" />
          </a>
          <a href=" https://wa.me/8870042928">
            <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="col-lg-6 contact-form-container">
        <h1>Let's Connect</h1>
        {messageSent && (
          <div className="success-message">Form submitted successfully!</div>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="user_name" className="form-control" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="user_email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" className="form-control" />
          </div>
          <input type="submit" value="Send" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
