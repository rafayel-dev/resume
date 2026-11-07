export default function About() {
  const services = [
    {
      title: "Mobile App Development",
      desc: "Creating high-performance, fluid cross-platform mobile apps using React Native and Expo.",
      icon: "fa-solid fa-mobile-screen-button",
      color: "#6AB5B9",
      className: "bg-[#F2F7F6] dark:bg-[#1D1D1D]",
    },
    {
      title: "Fullstack Web Development",
      desc: "Building scalable, performant web applications using Next.js 16, React 19, and Node.js.",
      icon: "fa-solid fa-code",
      color: "#E93B81",
      className: "bg-[#FFF4F4] dark:bg-[#1D1D1D]",
    },
    {
      title: "SaaS & Dashboard Architecture",
      desc: "Architecting interactive admin dashboards, data visualization platforms, and scalable portals.",
      icon: "fa-solid fa-layer-group",
      color: "#FD7590",
      className: "bg-[#FFF4F4] dark:bg-[#1D1D1D]",
    },
    {
      title: "REST APIs & Cloud Automation",
      desc: "Designing robust RESTful APIs, MongoDB/PostgreSQL databases, and cloud-hosted bots on Railway.",
      icon: "fa-solid fa-network-wired",
      color: "#C17CEB",
      className: "bg-[#F2F7F6] dark:bg-[#1D1D1D]",
    },
  ];

  return (
    <section className="px-5 sm:px-8 md:px-10 py-12">
      <h2 className="after-effect">About Me</h2>
      <div className="grid grid-cols-1 gap-4 leading-7 text-[#44566c] dark:text-[#A6A6A6] lg:grid-cols-2">
        <p className="mb-4">
          I am an <strong>Executive Frontend & Mobile Engineer</strong> and{" "}
          <strong>Fullstack Developer</strong> with a passion for architecting
          seamless, high-performance digital products. With over 3+ years of
          professional experience across agency and freelance environments, I
          specialize in crafting complex web applications with{" "}
          <strong>Next.js</strong> and fluid cross-platform mobile apps with{" "}
          <strong>React Native & Expo</strong>.
        </p>
        <p className="mb-4">
          My goal is to translate complex business requirements into intuitive,
          bulletproof solutions. Whether it&apos;s a high-scale SaaS dashboard,
          a pet care ecosystem, or a sleek mobile product, I deliver clean,
          type-safe, and maintainable software with a detail-oriented mindset.
        </p>
      </div>

      <div className="pt-8">
        <h3 className="text-[32px] font-bold mb-8 dark:text-white font-roboto-slab">
          What I do!
        </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row p-8 rounded-[20px] dark:border-[#212425] border-2 ${service.className}`}
            >
              <span
                className="text-[40px] mt-1 shrink-0"
                style={{ color: service.color }}
              >
                <i className={service.icon}></i>
              </span>
              <div className="ml-5">
                <h4 className="text-[22px] font-semibold mb-2 dark:text-white text-black">
                  {service.title}
                </h4>
                <p className="leading-7 text-[#44566c] dark:text-[#A6A6A6]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-12">
        <h3 className="text-[32px] font-bold mb-8 dark:text-white font-roboto-slab">
          Professional Stack
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            "React.js",
            "Next.js 16",
            "React Native",
            "Expo",
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Redux Toolkit",
            "Tailwind CSS",
            "REST APIs",
            "Railway",
            "Git/GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#F3F6F6] dark:bg-[#1D1D1D] px-6 py-2.5 rounded-full text-sm font-medium dark:text-white shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
