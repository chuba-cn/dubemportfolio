import { BriefcaseBusiness } from "lucide-react";
import JobCarouselMobile from "./JobCarouselMobile";
import JobCarouselDesktop from "./JobCarouselDesktop";


const Experiences = () => {

  return (
    <section
      className="w-full mt-20 md:mt-16 lg:p-2 "
      id="experiences"
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700">
        Experience{" "}
        <BriefcaseBusiness className="inline text-primary font-bold h-8 w-8" />
      </h1>
      <div className="flex justify-center items-center mt-16 lg:hidden">
        <JobCarouselMobile />
      </div>
      <div className="hidden lg:flex justify-center mt-16">
        <JobCarouselDesktop />
      </div>
    </section>
  );
};

export default Experiences;