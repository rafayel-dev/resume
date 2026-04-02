import Image from "next/image";

export default function About() {
  const services = [
    {
      title: "Fullstack Web Development",
      desc: "Building robust, scalable web applications using Next.js, Node.js, and MongoDB.",
      icon: "fa-solid fa-code",
      color: "#E93B81",
      className: "bg-[#FFF4F4] dark:bg-[#1D1D1D]",
    },
    {
      title: "Mobile App Development",
      desc: "Creating high-performance cross-platform mobile apps with React Native.",
      icon: "fa-solid fa-mobile-screen-button",
      color: "#6AB5B9",
      className: "bg-[#F2F7F6] dark:bg-[#1D1D1D]",
    },
    {
      title: "WordPress Customization",
      desc: "Developing custom themes and plugins for complex WordPress business solutions.",
      icon: "fa-brands fa-wordpress",
      color: "#FD7590",
      className: "bg-[#FFF4F4] dark:bg-[#1D1D1D]",
    },
    {
      title: "API Integration",
      desc: "Seamlessly connecting frontend applications with complex backend services and third-party APIs.",
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
          I am a specialized <strong>Fullstack Developer</strong> and{" "}
          <strong>React Native App Developer</strong> with a passion for
          building seamless digital experiences. With over 3 years of
          experience, I excel in creating complex web applications and
          high-performance mobile apps.
        </p>
        <p className="mb-4">
          My goal is to translate complex business requirements into intuitive,
          user-friendly solutions. Whether it's a high-scale SAAS platform or a
          sleek mobile application, I bring a detail-oriented approach to every
          project.
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
            "Next.js",
            "React Native",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "WordPress",
            "Tailwind CSS",
            "TypeScript",
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
      <div className="pt-16 pb-12 bg-[#F8FBFB] dark:bg-[#111111] -mx-5 sm:-mx-8 md:-mx-10 px-5 sm:px-8 md:px-10 rounded-b-2xl">
        <h3 className="text-[32px] font-bold mb-8 dark:text-white text-center font-roboto-slab">
          Trusted By
        </h3>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-items-center justify-center gap-8 md:gap-12 opacity-60 dark:invert transition-all">
          <Image
            src="/images/slider/brand.png"
            width={100}
            height={40}
            alt="Brand"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <Image
            src="/images/slider/brand1.png"
            width={100}
            height={40}
            alt="Brand"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <Image
            src="/images/slider/brand2.png"
            width={100}
            height={40}
            alt="Brand"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <Image
            src="/images/slider/brand3.png"
            width={100}
            height={40}
            alt="Brand"
            className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
          />
          <div className="col-span-2 sm:col-span-1">
            <Image
              src="/images/slider/brand4.png"
              width={100}
              height={40}
              alt="Brand"
              className="h-8 w-auto grayscale hover:grayscale-0 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
