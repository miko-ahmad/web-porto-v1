import { FaCode } from "react-icons/fa6";

const skills = [
  { name: "HTML & CSS", level: "90%" },
  { name: "JavaScript", level: "85%" },
  { name: "React.js", level: "80%" },
  { name: "Node.js", level: "75%" },
  { name: "Tailwind CSS", level: "80%" },
  { name: "Git & GitHub", level: "70%" },
];

export default function Skills() {
  return (
    <div className="pb-5">
      <div className="flex items-center gap-3 p-2">
        <div className=" relative flex items-center justify-center w-[30px] h-[30px] sm:w-[48px] sm:h-[48px] rounded-[8px] sm:rounded-[12px] text-[16px] sm:text-[18px]  shadow-custom-dark bg-custom-gradient z-[1]">
          <FaCode className=" p-[4px] text-[28px] " />
        </div>
        <h2 className="text-2xl font-bold">My Skills</h2>
      </div>
      <div data-aos="fade-right" data-aos-duration="500" className=" mx-6 mt-2">
        <div className="  rounded-lg shadow-md bg-darkOne px-12 py-6 pt-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-white">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-900 rounded-full h-2.5">
                <div
                  className="bg-darkFive h-2.5 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
