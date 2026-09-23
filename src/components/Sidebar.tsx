import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="col-span-12 lg:col-span-4 h-fit lg:sticky lg:top-44">
      <div className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[100px] md:mt-[220px] lg:mt-0 shadow-sm border border-gray-100 dark:border-[#212425]">
        <Image
          src="/images/about/rafiul-profile.jpg"
          width={240}
          height={240}
          priority
          className="w-[200px] h-[200px] lg:w-[240px] lg:h-[240px] absolute left-[50%] transform -translate-x-[50%] drop-shadow-xl mx-auto rounded-[20px] -mt-[100px] lg:-mt-[140px] object-cover"
          alt="Portrait of Rafiul Islam"
        />
        <div className="pt-[110px] lg:pt-[120px] pb-8">
          <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white">
            Rafiul Islam
          </h1>
          <p className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-4 py-1.5 rounded-lg dark:text-[#A6A6A6] text-sm font-medium">
            Executive Frontend & Mobile Engineer
          </p>
          <div className="flex justify-center space-x-3">
            <a
              href="https://github.com/rafayel-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <span className="socialbtn text-[#181717] dark:text-white">
                <i className="fa-brands fa-github"></i>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/rafayel-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <span className="socialbtn text-[#0072b1]">
                <i className="fa-brands fa-linkedin-in"></i>
              </span>
            </a>
            <a
              href="https://wa.me/8801640080338"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <span className="socialbtn text-[#25D366]">
                <i className="fa-brands fa-whatsapp"></i>
              </span>
            </a>
            <a href="mailto:rafayeldevs@gmail.com" aria-label="Send email">
              <span className="socialbtn text-[#6AB5B9]">
                <i className="fa-solid fa-envelope"></i>
              </span>
            </a>
          </div>

          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                <i className="fa-solid fa-mobile-screen-button"></i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Phone
                </p>
                <a
                  className="dark:text-white hover:text-[#FA5252] transition-colors"
                  href="tel:+8801640080338"
                >
                  +880 1640 080338
                </a>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                <i className="fa-solid fa-envelope-open-text"></i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Email
                </p>
                <a
                  className="dark:text-white hover:text-[#FA5252] transition-colors"
                  href="mailto:rafayeldevs@gmail.com"
                >
                  rafayeldevs@gmail.com
                </a>
              </div>
            </div>
            <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Location
                </p>
                <p className="dark:text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="flex py-2.5">
              <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                <i className="fa-solid fa-calendar-days"></i>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
                  Availability
                </p>
                <p className="dark:text-white">
                  Available for Full-time & Freelance
                </p>
              </div>
            </div>
          </div>

          <a
            className="download-btn inline-flex items-center justify-center mt-6"
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={20}
              height={20}
              className="mr-3"
              src="/images/icons/dowanload.png"
              alt="Download"
            />
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
