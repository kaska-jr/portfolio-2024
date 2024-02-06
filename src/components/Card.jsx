import React from "react";
import { GrGithub } from "react-icons/gr";

const Card = () => {
  return (
    <article className="p-2 bg-lightPrimary w-full h-auto rounded-md">
      <img
        src="/cardImg.png"
        className="block object-fill h-44 rounded-md"
        alt="project_1"
      />
      <div className="py-2 text-primary">
        <figcaption className=" font-bold">Auto Repair website</figcaption>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="bg-primary my-5 flex items-center justify-center rounded-md py-2">
        <button className="flex gap-1 items-center text-white">
          <GrGithub className="text-white" />
          <span className="text-white underline">viewcode</span>
        </button>
      </div>
    </article>
  );
};

export default Card;
