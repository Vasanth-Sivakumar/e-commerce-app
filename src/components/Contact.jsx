import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dfzd85r",
        "template_82hi9bx",
        form.current,
        "wPGGEg-tlNRX3hs3J"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      alert("Message Successfully Sent");
      form.current.reset();
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8 py-5">
          <div className="card">
            <div className="card-header">
              <h2>Contact</h2>
            </div>
            <div className="card-body">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group py-1">
                  <label htmlFor="user_name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="user_name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group py-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="user_email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group py-1 pb-3">
                  <label htmlFor="Message">Message</label>
                  <textarea name="message" 
                  className="form-control" 
                  placeholder="Enter your Message" />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn btn-outline-dark me-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
