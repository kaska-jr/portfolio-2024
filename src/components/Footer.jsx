import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-primary text-white w-full mt-10 h-36 flex flex-col gap-3 items-center justify-center">
      <h1 className="font-bold">
        <span className="font-bold text-4xl">SK</span>
        <span className="pacifico-regular">Dev</span>
      </h1>
      <div className="flex flex-col items-center justify-center w-[95%] mx-auto">
        <p className="text-center">
          Built by <span className="pacifico-regular">Kanu Stanley</span> with{" "}
          <span className="text-pink-800">love ❤️‍🔥</span> and coffee 🍵
        </p>
      </div>
      <div className="flex gap-4 text-white">
        <FaGithub fontSize={24} />
        <FaFacebook fontSize={24} />
        <AiFillTwitterCircle fontSize={24} />
      </div>
    </div>
  );
}

export default Footer;
