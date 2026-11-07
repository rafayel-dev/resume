export default function Resume() {
  const education = [
    {
      year: "2018 - 2024",
      degree: "Diploma in Computer Science & Technology",
      institute: "Pabna Polytechnic Institute (PPI)",
      desc: "Specialized in software engineering, modern web technologies, database design, and algorithmic problem solving.",
    },
    {
      year: "2018",
      degree: "Secondary School Certificate (S.S.C - Science)",
      institute: "Majpara Senior Madrasha",
      desc: "Graduated with GPA 4.86, developing strong foundations in analytical thinking, mathematics, and computing.",
    },
  ];

  const experience = [
    {
      year: "2023 - Present",
      title: "Executive Frontend & Mobile Engineer",
      company: "Sparktech Agency / Team Lead",
      desc: "Directing frontend architecture and cross-platform mobile apps using React Native, Expo, Next.js, and TypeScript with scalable state management.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend & WordPress Developer",
      company: "The Tech Studio",
      desc: "Developed client web applications, responsive frontend solutions, custom theme architectures, and dynamic business portals.",
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
              className="p-7 rounded-2xl mb-5 bg-[#F3F6F6] dark:bg-[#1D1D1D] shadow-sm border border-transparent dark:border-[#212425]"
            >
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-[#252525] text-[#FA5252]">
                {item.year}
              </span>
              <h4 className="text-lg font-semibold mt-3 mb-1 dark:text-white">
                {item.degree}
              </h4>
              <p className="text-sm font-medium text-[#FA5252] mb-2">{item.institute}</p>
              <p className="dark:text-gray-400 text-sm leading-6 text-[#44566c]">
                {item.desc}
              </p>
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
              className="p-7 rounded-2xl mb-5 bg-[#EEF5FA] dark:bg-[#1D1D1D] shadow-sm border border-transparent dark:border-[#212425]"
            >
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white dark:bg-[#252525] text-[#FA5252]">
                {item.year}
              </span>
              <h4 className="text-lg font-semibold mt-3 mb-1 dark:text-white">
                {item.title}
              </h4>
              <p className="text-sm font-medium text-[#0072b1] dark:text-[#6AB5B9] mb-2">{item.company}</p>
              <p className="dark:text-gray-400 text-sm leading-6 text-[#44566c]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-semibold mb-10 dark:text-white">
            Core Engineering Stack
          </h3>
          <div className="space-y-6">
            {[
              { skill: "React Native & Expo", level: "92%" },
              { skill: "Next.js 16 & React 19", level: "90%" },
              { skill: "TypeScript & JavaScript", level: "88%" },
              { skill: "Node.js, Express & MongoDB", level: "85%" },
            ].map(({ skill, level }) => (
              <div key={skill}>
                <div className="flex justify-between mb-1.5 font-medium dark:text-white text-sm">
                  <span>{skill}</span>
                  <span>{level}</span>
                </div>
                <div className="h-2 w-full bg-[#EDF2F2] dark:bg-[#252525] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-full"
                    style={{ width: level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-10 dark:text-white">
            Tools, Cloud & Architecture
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Redux Toolkit",
              "RTK Query",
              "Zustand",
              "Tailwind CSS v4",
              "NativeBase",
              "Material UI",
              "Railway Deployment",
              "Git / GitHub",
              "Postman",
              "Telegram Bot API",
              "MongoDB Atlas",
              "PostgreSQL",
              "REST APIs",
              "Framer Motion",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-[#F3F6F6] dark:bg-[#1D1D1D] px-4 py-2 rounded-lg text-xs font-semibold dark:text-white border border-gray-100 dark:border-[#282828] shadow-xs"
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
