import React from "react";
import "./form.css";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";

function myFrom() {
  return (
    <div>
      <div className="text-center">
        <h1 id="contact-title">Contact</h1>
      </div>
      <div id="contact-container">
        <form id="contact-form" action="action_page.php">
          <div id="name-container">
            <input
              id="first-name-input"
              type="text"
              name="first-name"
              placeholder="First name"
            ></input>
            <input
              id="last-name-input"
              type="text"
              name="last-name"
              placeholder="Last name"
            ></input>
          </div>

          <input
            id="mail-input"
            type="mail"
            name="mail"
            placeholder="Email"
          ></input>

          <textarea
            id="subject-input"
            name="subject"
            placeholder="Type your message here"
          ></textarea>

          <input id="submit-button" type="submit" value="Submit" />
        </form>
        <div id="traditional-contact">
          <h2 className="">Contact me through:</h2>
          <a href="mailto:rebaz.mohsen1111@gmail.com" id="contact-link">
            rebaz.mohsen1111@gmail.com
          </a>
          <hr />
          <h2>Find me on</h2>
          <div className="pt-2 pb-2 flex ">
            <a
              href="https://github.com/RebazMohsen"
              target="_blank"
              rel="noreferrer"
            >
              <UseAnimations
                className=" fill-orange-500 border-[#23d5ab]   border-2 rounded-full p-2 hover:bg-slate-300 "
                animation={github}
                size={55}
                loop={false}
              />
            </a>
            <a
              href="https://iq.linkedin.com/in/rebaz-mohsen-a68817170 "
              target="_blank"
              rel="noreferrer"
            >
              <UseAnimations
                className=" border-[#23d5ab]  ml-2 border-2 rounded-full p-2 hover:bg-slate-300"
                animation={linkedin}
                size={55}
                loop={false}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default myFrom;
