import Link from "next/link";
import Image from "next/image";
import { SwordsIcon } from "lucide-react";
import ProjectList from "./ProjectList";

const Projects = () => {
  return (
    <section className="w-full mt-20 md:mt-32" id="projects">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700 ">
        Projects{" "}
        <SwordsIcon className="inline text-primary font-bold h-8 w-8" />
      </h1>
      <ProjectList />
    </section>
  );
};

export default Projects;