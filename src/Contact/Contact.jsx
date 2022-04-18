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
        <form action="" className="text-indigo-900 font-semibold space-y-3">
          <label htmlFor="input-name" className="text-indigo-900">
            Name
          </label>
          <input
            type="text"
            className="border border-indigo-900 rounded-xl px-2 py-1"
            placeholder="Type here..."
            name="input-name"
          />
          <label htmlFor="input-email">Email</label>
          <input
            type="text"
            className="border focus:border-2 border-indigo-900 rounded-xl px-2 py-1"
            placeholder="hello@example.com"
            name="input-email"
          />
          <label htmlFor="input-message">Message</label>
          <input
            type="placeholder"
            className="border focus:border-2 border-indigo-700 rounded-xl px-2 py-1"
            placeholder="Your message here"
            name="input-message"
          />
          <div className="py-4 flex items-center justify-evenly w-full">
            <button
              onClick={closeForm}
              type="button"
              className="w-24 border border-indigo-700 px-4 py-2 rounded-xl font-semibold"
            >
              Cancel
            </button>
            <a href="mailto:migangelturpo@gmail.com">
              <button
                type="button"
                className="w-24 border border-indigo-700 text-white bg-indigo-700 px-4 py-2 rounded-xl font-semibold"
              >
                Send
              </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Contact };
