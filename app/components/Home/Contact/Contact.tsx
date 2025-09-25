'use client';
import React from "react";
import { FaPhone, FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-[#0a0a1f] via-[#0a0f2e] to-[#0a0a1f] px-6 py-12"
    >
      {/* Heading */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">Contact Me :</h1>
        <p className="text-gray-300 mt-2">
          Feel free to get in touch anytime 🚀
        </p>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-center space-x-4 bg-[#101744] p-5 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center">
              <FaPhone className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-300">9746490508</p>
            </div>
          </div>

          {/* Gmail */}
          <div className="flex items-center space-x-4 bg-[#101744] p-5 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center">
              <FaEnvelope className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Gmail</h3>
              <p className="text-gray-300">phuyalsaksam1@gmail.com</p>
            </div>
          </div>

          {/* Linkedin */}
          <div className="flex items-center space-x-4 bg-[#101744] p-5 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center">
              <FaLinkedin className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/saksham-phuyal-7a8971347"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
              Linkedin
              </a>
            </div>
          </div>
              <div className="flex items-center space-x-4 bg-[#101744] p-5 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition">
            <div className="w-12 h-12 bg-cyan-500 text-white rounded-full flex items-center justify-center">
              <FaLinkedin className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Github</h3>
              <a
                href="https://github.com/SakshamPhuyal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                Github
              </a>
            </div>
          </div>
            
        </div>

        {/* Contact Form */}
        <div className="bg-[#101744] p-8 rounded-xl shadow-lg">
          <form className="space-y-6">
            <h3 className="text-2xl font-semibold">Send Message</h3>
            <p className="text-gray-400">(Feel free to contact me)</p>

            <div className="relative">
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0f2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <span className="absolute left-3 top-[-10px] text-sm text-cyan-400 bg-[#101744] px-2">
                Full Name
              </span>
            </div>

            <div className="relative">
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0a0f2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <span className="absolute left-3 top-[-10px] text-sm text-cyan-400 bg-[#101744] px-2">
                Email
              </span>
            </div>

            <div className="relative">
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-[#0a0f2e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <span className="absolute left-3 top-[-10px] text-sm text-cyan-400 bg-[#101744] px-2">
                Type your message...
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 transition rounded-lg font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
