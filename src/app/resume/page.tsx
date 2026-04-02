export default function Resume() {
  const education = [
    {
      year: "2021 - 2024",
      degree: "Diploma in CSE",
      institute: "Pabna Polytechnic Institute (PPI)",
    },
  ];

  const experience = [
    {
      year: "2)23 - Present",
      title: "Senior Fullstack Developer",
      company: "Freelance Team Lead",
    },
    {
      year: "2021 - 2023",
      title: "Frontend & WordPress Developer",
      company: "The Tech Studio",
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-10 py-12">
      <h2 className="after-effect">Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center dark:text-white">
            <span className="text-[#F95054] mr-3">
              <i className="fa-solid fa-graduation-cap"></i>
            </span>{" "}
            Education
          </h3>
          {education.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl mb-5 bg-[#F3F6F6] dark:bg-[#1D1D1D] shadow-sm"
            >
              <span className="text-sm text-[#44566c] dark:text-gray-400">
                {item.year}
              </span>
              <h4 className="text-lg font-medium mt-1 mb-1 dark:text-white">
                {item.degree}
              </h4>
              <p className="dark:text-gray-300 font-light">{item.institute}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center dark:text-white">
            <span className="text-[#F95054] mr-3">
              <i className="fa-solid fa-briefcase"></i>
            </span>{" "}
            Experience
          </h3>
          {experience.map((item, index) => (
            <div
              key={index}
              className="p-7 rounded-2xl mb-5 bg-[#EEF5FA] dark:bg-[#1D1D1D] shadow-sm"
            >
              <span className="text-sm text-[#44566c] dark:text-gray-400">
                {item.year}
              </span>
              <h4 className="text-lg font-medium mt-1 mb-1 dark:text-white">
                {item.title}
              </h4>
              <p className="dark:text-gray-300 font-light">{item.company}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-10 dark:text-white">
            Core Tech Stack
          </h3>
          <div className="space-y-6">
            {["React Native", "Next.js", "Node.js (Express)", "MongoDB"].map(
              (skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-1.5 font-medium dark:text-white">
                    <span>{skill}</span>
                    <span>90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#EDF2F2] dark:bg-[#1C1C1C] rounded-full">
                    <div className="h-full bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-full w-[90%]"></div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-10 dark:text-white">
            Tools & Others
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Redux Toolkit",
              "RTK Query",
              "Material UI",
              "Ant Design",
              "NativeBase",
              "Expo",
              "Git/Github",
              "Postman",
              "Firebase Auth",
              "Framer Motion",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-[#F3F6F6] dark:bg-[#1D1D1D] px-5 py-2.5 rounded-lg text-sm font-medium dark:text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
