import React from "react";

const About = () => {
  return (
    <section className="bg-lightSecondary relative pt-10 pb-20" id="about">
      <div className="pb-10  px-3 md:px-20 flex flex-col items-center text-center">
        <h1 className=" text-primary text-3xl md:text-4xl font-bold my-4">
          About Myself
        </h1>
        <p className="text-primary text-lg font-semibold md:text-xl max-w-3xl">
          As a web developer, am responsible for building and designing
          interactive, functional and user friendly web pages that meets the
          needs of a diverse online audience
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-3 md:px-10 justify-items-center max-w-[1280px] mx-auto">
        <article className="md:col-span-1">
          <div className="h-[450px] w-60 border-2 border-primary rounded-t-full rounded-b-full relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-12 text-center flex flex-col gap-2 w-full">
              <p className="text-tertiary font-bold text-lg">Hello👋, i'm</p>
              <h1 className="text-primary font-bold text-xl w-full">
                Kanu Stanley
              </h1>
            </div>
            <div className="h-[250px] w-40 bg-primary rounded-t-full rounded-b-full shrink-0 absolute left-1/2 -translate-x-1/2 bottom-12"></div>
            <img
              src="/my_img.png"
              alt="pictures"
              className="rounded-b-full w-40 shrink-0 absolute left-1/2 -translate-x-1/2 bottom-12"
            />
          </div>
        </article>

        <article className="md:col-span-2 flex flex-col items-center justify-center">
          <div className="flex">
            <div className="border-b border-r border-primary h-40 basis-1/2 p-8 pr-6 pl-0">
              <h1 className="text-primary font-bold text-sm md:text-lg">
                My skills:
              </h1>
              <div className="flex items-start gap-2 ">
                <div className="h-2 w-2 mt-1 rounded-full bg-primary shrink-0"></div>
                <p className="text-sm md:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus molestias omnis amet maiores necessitatibus.
                </p>
              </div>
            </div>

            <div className="border-b border-l border-primary h-40 basis-1/2 p-8 pl-6 pr-0">
              <h1 className="text-primary font-bold text-sm md:text-lg">
                My journey in Code:
              </h1>
              <div className="flex items-start gap-2 ">
                <div className="h-2 w-2 mt-1 rounded-full bg-primary shrink-0 "></div>
                <p className="text-sm md:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus molestias omnis amet maiores necessitatibus.
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <div className="border-t border-r border-primary h-40 basis-1/2 p-8 pr-6 pl-0">
              <h1 className="text-primary font-bold text-sm md:text-lg">
                My interests:
              </h1>
              <div className="flex items-start gap-2 ">
                <div className="h-2 w-2 mt-1 rounded-full bg-primary shrink-0 "></div>
                <p className="text-sm md:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus molestias omnis amet maiores necessitatibus.
                </p>
              </div>
            </div>

            <div className="border-t border-l border-primary h-40 basis-1/2 p-8 pl-6 pr-0">
              <h1 className="text-primary font-bold text-sm md:text-lg">
                Digital Experiences:
              </h1>
              <div className="flex items-start gap-2 ">
                <div className="h-2 w-2 mt-1 rounded-full bg-primary shrink-0"></div>
                <p className="text-sm md:text-sm lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Possimus molestias omnis amet maiores necessitatibus.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
