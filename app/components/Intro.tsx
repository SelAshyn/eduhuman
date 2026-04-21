import React from "react";
import { GraduationCap, Microscope, SquareCode } from "lucide-react";

export function Intro() {
  return (
    <div
      className="
        h-min
        p-6 sm:p-10 md:p-14 lg:p-20
        m-4 sm:m-8 md:m-12 lg:m-20
        mt-0 lg:mt-[-10px]
        rounded-3xl bg-white
        flex flex-col lg:flex-row
        items-center justify-center lg:justify-left
        shadow-2xl
      "
      style={{ fontFamily: "Merriweather, serif" }}
    >

      {/* LEFT */}
      <div className="max-w-5xl bg-white p-6 sm:p-8 lg:p-10 text-center lg:text-left">
        <h1 className="text-sm sm:text-base lg:text-lg text-blue-600">
          WHO WE ARE
        </h1>

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 lg:mt-10 leading-snug lg:leading-15">
          EduHuman Resource <br />
          Development and Research <br />
          Center Pvt. Ltd.
        </h1>

        <p className="text-gray-700 mt-6 max-w-xl text-sm sm:text-base">
          Registered under the Companies Act, 2063, we are a professional
          organization dedicated to human resource development in the
          education sector. We conduct high-quality training, workshops,
          research, and consulting services to uplift schools, colleges, and
          educational leaders across Nepal.
          <br /><br />
          Our registered office is located at Budhanilkantha Municipality-11,
          Kathmandu.
        </p>

        <a
          href="/about"
          className="text-blue-600 hover:cursor-pointer mt-8 lg:mt-12 inline-block"
        >
          Learn more about us →
        </a>
      </div>

      {/* RIGHT CARD */}
      <div
        className="
          w-full max-w-md
          lg:w-[520px] lg:ml-50
          bg-white p-4 sm:p-6 lg:p-3
          rounded-lg shadow-lg
          mt-8 lg:mt-0
        "
      >
        <div className="flex m-2 sm:m-4 mb-6 lg:mb-10 gap-4 lg:gap-10 items-center">
          <GraduationCap className="w-10 h-10 lg:size-14 shrink-0" />
          <div>
            <h1 className="text-sm sm:text-base lg:text-lg font-bold">
              Teacher & Leadership Training
            </h1>
            <p className="text-xs sm:text-sm lg:text-[13px]">
              Capacity building for educators and school administrators
            </p>
          </div>
        </div>

        <div className="flex m-2 sm:m-4 mb-6 lg:mb-10 gap-4 lg:gap-10 items-center">
          <Microscope className="w-10 h-10 lg:size-14 shrink-0" />
          <div>
            <h1 className="text-sm sm:text-base lg:text-lg font-bold">
              Educational Research & Surveys
            </h1>
            <p className="text-xs sm:text-sm lg:text-[13px]">
              Promoting innovation through evidence-based studies
            </p>
          </div>
        </div>

        <div className="flex m-2 sm:m-4 gap-4 lg:gap-10 items-center">
          <SquareCode className="w-10 h-10 lg:size-14 shrink-0" />
          <div>
            <h1 className="text-sm sm:text-base lg:text-lg font-bold">
              Digital Education Solutions
            </h1>
            <p className="text-xs sm:text-sm lg:text-[13px]">
              Rightful uses of IT platforms and modern learning tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
