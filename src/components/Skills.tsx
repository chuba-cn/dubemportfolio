import { Computer } from "lucide-react";
import { skills } from '@/constants/index';

const Skills = () => {
  return (
    <section className="w-full mt-20 md:mt-32" id="skills">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-wrap text-gray-700">
        Skills <Computer className="inline text-primary font-bold h-8 w-8" />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 ">
        {skills.map((skill, index) => (
          <div
            className="flex flex-col items-start justify-start gap-3 "
            key={index}
          >
            <div>
              <p className="text-gray-700 font-bold text-2xl">
                {skill.skillGroup}
              </p>
            </div>

              <div
                className="flex flex-col justify-start items-start "
                key={index}
              >
                {skill.skillItem.map((item, index) => (
                  <div key={index}>
                    <p className="text-gray-600 text-[22px] tracking-wide">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;