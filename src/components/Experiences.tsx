import { BriefcaseBusiness } from "lucide-react";
import JobCarousel  from "./JobCarousel";


const Experiences = () => {

  return (
    <section className="w-full mt-20 md:mt-0 py-8 md:py-24 lg:py-28 xl:py-30" id="experiences">
      <div className="container px-4 md:px-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700">
          Experience {' '}
          <BriefcaseBusiness className="inline text-primary font-bold h-8 w-8"/>
        </h1>
        <div className="flex justify-center items-center mt-10 lg:mt-16">
          <JobCarousel/>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

{/* <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
<div className="flex flex-col items-start space-y-4">
  <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      Work Experience
    </h2>
    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
      A summary of my professional experience.
    </p>
  </div>
  <div className="grid gap-6">
    <div className="grid gap-2">
      <h3 className="text-lg font-bold">Cyber Security Analyst</h3>
      <p className="text-gray-500 ">
        Acme Cybersecurity, 2018 - Present
      </p>
      <p className="text-gray-500 ">
        Responsible for conducting vulnerability assessments,
        implementing security controls, and responding to security
        incidents.
      </p>
    </div>
    <div className="grid gap-2">
      <h3 className="text-lg font-bold">Security Intern</h3>
      <p className="text-gray-500 ">
        Cybersec Solutions, 2016 - 2018
      </p>
      <p className="text-gray-500 ">
        Assisted in the development and implementation of security
        policies and procedures.
      </p>
    </div>
  </div>
</div>
<div className="flex flex-col items-start space-y-4">
  <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
      Education
    </h2>
    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
      My academic background.
    </p>
  </div>
  <div className="grid gap-6">
    <div className="grid gap-2">
      <h3 className="text-lg font-bold">
        Master of Science in Cybersecurity
      </h3>
      <p className="text-gray-500 ">
        University of Cyberton, 2016 - 2018
      </p>
      <p className="text-gray-500 ">
        Specialized in network security, incident response, and
        security automation.
      </p>
    </div>
    <div className="grid gap-2">
      <h3 className="text-lg font-bold">
        Bachelor of Science in Computer Science
      </h3>
      <p className="text-gray-500 ">
        Cybersec University, 2012 - 2016
      </p>
      <p className="text-gray-500 ">
        Focused on software development, data structures, and
        algorithms.
      </p>
    </div>
  </div>
</div>
</div> */}
