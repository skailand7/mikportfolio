import React from "react";
import "./Contact.css";

const Contact = () => {
  const closeForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.classList.add("hidden");
  };
  return (
    <div className="contact-container hidden" id="contact-container">
      <div className="contact-contain">
        <form action="">
          <label htmlFor="input-name">Name</label>
          <input type="text" placeholder="Name" name="input-name" />
          <label htmlFor="input-email">Email</label>
          <input type="text" placeholder="Email" name="input-email" />
          <label htmlFor="input-message">Message</label>
          <input
            type="placeholder"
            placeholder="Your Message here"
            name="input-message"
          />
          <div className="form-buttons">
            <button onClick={closeForm} type="button" className="button cancel">
              Cancel
            </button>
            <button type="button" className="button">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Contact };
