import ProjectSlider from "./Slider";

const Projects = () => {
  return (
    <section className="bg-lightSecondary" id="projects">
      <div className="w-full py-10 px-3 md:px-20 ">
        <h1 className=" text-primary text-3xl md:text-4xl font-bold my-2">
          My Projects
        </h1>
        <p className="text-primary text-lg font-semibold md:text-xl">
          Things i have built so far
        </p>
        <div className="mt-5">
          <ProjectSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
