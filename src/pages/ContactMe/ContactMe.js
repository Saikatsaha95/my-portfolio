import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMe = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6225qr5",
        "template_y1u6a0p",
        form.current,
        "user_iHsXpG3n5e94HjWknMMOX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <div className="top-margin mb-5">
      <div className="container px-4 my-5">
        <h1
          data-aos="fade-up"
          className="text-center gradient-text fw-bold mb-5"
        >
          Contact Me
        </h1>
        <form className="w-50  mx-auto" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="form-control p-3 mb-3"
            placeholder="Name"
            name="name"
          />
          <input
            type="email"
            className="form-control p-3 mb-3"
            placeholder="name@example.com"
            name="email"
          />
          <input
            type="text"
            className="form-control p-3 mb-3"
            placeholder="subject"
            name="subject"
          />
          <textarea
            className="form-control mb-3"
            placeholder="Leave a message here"
            id="floatingTextarea2"
            name="message"
            style={{ height: "100px" }}
          ></textarea>

          <div className="text-center w-100">
            <button className="btn btn-danger px-5" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
