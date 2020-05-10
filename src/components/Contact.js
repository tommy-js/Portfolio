import React from "react";
import "../Main.scss";
const axios = require("axios").default;

function Contact() {
  async function submitForm(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3000/Contact/send"
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  return (
    <div className="contact">
      <h1 className="contact_header">Contact me!</h1>
      <form onSubmit={e => submitForm(e)}>
        <textarea />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
