import React from "react";
import "./Contact.css";

const Contact = () => {
  const closeForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.classList.add("hidden");
  };
  return (
    <div className="contact-container hidden z-20" id="contact-container">
      <div className="space-y-4 w-[350px] md:w-[400px] h-[500px] p-4">
        <form
          action=""
          className="w-full h-full flex flex-col rounded-xl justify-center text-indigo-900 dark:text-indigo-500 bg-gray-900 font-semibold space-y-3 p-8"
        >
          <label htmlFor="input-name" className="">
            Name
          </label>
          <input
            type="text"
            className="border border-indigo-900 rounded-xl px-2 py-1 "
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
              className="w-24 border border-indigo-700 dark:border-gray-300 dark:text-gray-300 px-4 py-2 rounded-xl font-semibold"
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
