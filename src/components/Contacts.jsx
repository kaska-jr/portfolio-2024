import React, { useState } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaMailBulk,
  FaMailchimp,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Contacts = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      className="text bg-lightPrimary min-h-[80vh] m-3 flex flex-col justify-center lg:flex-row gap-20 p-3 md:p-16"
      id="contact"
    >
      <div className="flex-1 flex flex-col gap-10 lg:gap-32">
        <div>
          <h1 className="text-2xl font-bold max-w-xs">Lets Discuss</h1>
          <h1 className="text-2xl font-bold max-w-xs">
            on something <span className="text-pink-800">Cool</span> together
          </h1>
        </div>
        <div className="font-bold flex flex-col gap-2">
          <h1>I'm interested in...</h1>
          <div className="flex gap-2">
            <button className="bg-primary text-white font-semibold py-1 px-2 rounded-md">
              Ecommerce Website
            </button>
            <button className="border-primary text-primary border font-semibold py-1 px-2 rounded-md">
              Saas Website
            </button>
          </div>
          <div className="flex gap-2">
            <button className="border-primary text-primary border font-semibold py-1 px-2 rounded-md">
              Landing Website
            </button>
            <button className="border-primary text-primary border font-semibold py-1 px-2 rounded-md">
              Portfolio Website
            </button>
            <button className="lg:block hidden border-primary text-primary border font-semibold py-1 px-2 rounded-md">
              Blog Website
            </button>
          </div>
          <div className="flex gap-2 lg:hidden">
            <button className="border-primary text-primary border font-semibold py-1 px-2 rounded-md">
              Blog Website
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <form action="" className="flex flex-col justify-center gap-6 w-full">
          <div className="w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-lightTertiary focus:outline-none h-10 px-2 w-full md:w-96 rounded-md"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-lightTertiary focus:outline-none h-10 px-2 w-full md:w-96 rounded-md"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="your Message"
              className="bg-lightTertiary focus:outline-none h-40 p-2 w-full md:w-96 rounded-md"
            ></textarea>
          </div>

          <button
            onClick={handleSubmit}
            className="flex items-center justify-center text-white bg-primary rounded-md p-2 w-full md:w-96"
          >
            <IoIosSend />
            <span>Submit</span>
          </button>

          <div className="flex gap-4 items-center justify-center w-full md:w-96">
            <a href="tel:08142458737">
              <div className="h-10 w-10 border rounded-full flex items-center justify-center border-primary">
                <FaPhone fontSize={22} className="text-primary" />
              </div>
            </a>

            <a href="mailto:stanleykanu500@gmail.com">
              <div className="h-10 w-10 border rounded-full flex items-center justify-center border-primary">
                <FaMailBulk fontSize={22} className="text-primary" />
              </div>
            </a>
            <div
              className="h-10 w-10 border rounded-full flex items-center justify-center border-primary"
              onClick={() => setIsModalOpen(true)}
            >
              <FaAddressBook fontSize={22} className="text-primary" />
            </div>
          </div>
        </form>

        <section
          className={`bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.9)]
           min-h-screen w-full top-0 left-0 highest-index transition-all duration-200 ease-in-out ${
             isModalOpen ? "fixed" : "hidden"
           }`}
        >
          <div className="flex items-center justify-center min-h-screen w-full">
            <div className="bg-white w-fit h-auto p-5 rounded-lg shadow-2xl flex flex-col gap-2">
              <h1 className="text-xl font-bold">
                Thank you for considering Me!
              </h1>
              <div>
                <a
                  href="/kanu_stanley_Web.pdf"
                  className="flex gap-1 items-center"
                >
                  <span className="text-primary text-base">
                    Click here to download CV
                  </span>
                  <FaDownload className="text-primary" />
                </a>
              </div>

              <button
                className="px-2 py-1 bg-primary text-white rounded-md w-fit self-end"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contacts;
