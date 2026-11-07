"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/xljdnwqa", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="px-5 sm:px-8 md:px-10 py-12">
      <h2 className="after-effect">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 md:p-10 rounded-2xl bg-[#FCF4FF] dark:bg-[#1D1D1D] flex items-center space-x-6 border dark:border-[#212425]">
          <span className="text-3xl md:text-4xl text-[#FA5252]">
            <i className="fa-solid fa-phone-volume"></i>
          </span>
          <div>
            <h4 className="text-lg md:text-xl font-bold dark:text-white">
              Phone
            </h4>
            <p className="text-[#44566c] dark:text-[#A6A6A6] text-sm md:text-base">
              +880 1640 080338
            </p>
          </div>
        </div>
        <div className="p-6 md:p-10 rounded-2xl bg-[#EEFBFF] dark:bg-[#1D1D1D] flex items-center space-x-6 border dark:border-[#212425]">
          <span className="text-3xl md:text-4xl text-[#6AB5B9]">
            <i className="fa-solid fa-envelope-open-text"></i>
          </span>
          <div>
            <h4 className="text-lg md:text-xl font-bold dark:text-white">
              Email
            </h4>
            <p className="text-[#44566c] dark:text-[#A6A6A6] text-sm md:text-base">
              rafayeldevs@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 md:p-12 rounded-2xl bg-[#F8FBFB] dark:bg-[#111111] border dark:border-[#212425]">
        <h3 className="text-3xl font-bold mb-8 dark:text-white">
          I&apos;m always open to discussing new{" "}
          <br className="hidden md:block" />
          <span className="text-[#FA5252]">projects or partnerships.</span>
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-transparent border-b border-gray-300 dark:border-[#333333] py-4 focus:outline-none focus:border-[#FA5252] dark:text-white transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border-b border-gray-300 dark:border-[#333333] py-4 focus:outline-none focus:border-[#FA5252] dark:text-white transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message..."
            rows={4}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full bg-transparent border-b border-gray-300 dark:border-[#333333] py-4 focus:outline-none focus:border-[#FA5252] dark:text-white transition-colors"
          ></textarea>
          <button
            type="submit"
            disabled={status === "loading"}
            className="download-btn !inline-flex items-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <span>{status === "loading" ? "Sending Message..." : "Submit Message"}</span>
            <i className={`fa-solid ${status === "loading" ? "fa-spinner fa-spin" : "fa-paper-plane"} text-sm`}></i>
          </button>
          {status === "success" && (
            <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium text-sm flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-base"></i>
              <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-medium text-sm flex items-center gap-2">
              <i className="fa-solid fa-circle-exclamation text-base"></i>
              <span>Oops! Something went wrong. Please try again or reach out directly at rafayeldevs@gmail.com</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
