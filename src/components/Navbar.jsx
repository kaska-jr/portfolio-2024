import React, { useState } from "react";
import { RiMailSendLine } from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const NavLinks = [
  {
    id: 1,
    path: "/",
    label: "home",
  },
  {
    id: 2,
    path: "/",
    label: "about",
  },
  {
    id: 3,
    path: "/",
    label: "skills",
  },
  {
    id: 4,
    path: "/",
    label: "projects",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="gradient h-16  text-lightSecondary relative shadow-2xl">
        <section className="absolute top-0 -right-[150px]">
          <img src="/main.png" alt="" className="h-[500px] rotate-div" />
        </section>

        <div className="flex gap-10 lg:justify-between items-center w-full  md:w-[70%] px-3 md:px-20 h-full">
          <h1 className="font-bold">
            <span className="font-bold text-4xl">SK</span>
            <span className="pacifico-regular">Dev</span>
          </h1>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              checked={open}
              onChange={() => setOpen(!open)}
            />

            {/* closed */}
            <MdOutlineMenu className="lg:hidden text-4xl md:text-5xl swap-off" />

            {/* opened */}
            <AiOutlineClose className="lg:hidden text-4xl md:text-5xl swap-on" />
          </label>

          <ul className="lg:flex gap-6 hidden">
            {NavLinks.map((link, index) => {
              return (
                <li className="text-base font-bold capitalize" key={index}>
                  <a href={`#${link.label}`}>{link.label}</a>
                </li>
              );
            })}
          </ul>

          <ul
            className={`lg:hidden absolute bg-white left-0 top-16 w-40 h-auto highest-index text-primary transition-all ease-linear duration-300 ${
              open ? "left-0" : "left-[-200%]"
            }`}
          >
            {NavLinks.map((link, index) => {
              return (
                <li
                  className={`text-base font-bold py-3 px-2 hover:bg-primary hover:text-white hover:px-4 capitalize transition-all ease-linear duration-300`}
                  key={index}
                >
                  <a href={`#${link.label}`}>{link.label}</a>
                </li>
              );
            })}
          </ul>
          <a href="#contact">
            <p className="hidden text-center bg-lightTertiary text-primary w-fit px-2 font-medium lg:flex items-center gap-1 rounded-md">
              <RiMailSendLine />
              <span>Hire me</span>
            </p>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
