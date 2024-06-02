import { SwordsIcon } from "lucide-react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="w-full mt-20 md:mt-32 md:mb-32" id="projects">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700 mb-10 md:mb-16 ">
        Projects{" "}
        <SwordsIcon className="inline text-primary font-bold h-8 w-8" />
      </h1>
      <ProjectList />
    </section>
  );
};

export default Projects;