import { BookOpenText, BriefcaseBusiness, Presentation } from "lucide-react";

export function Services() {
  return(
    <>
      <div className="min-h-[60vh] flex items-top pt-25 justify-center px-4 sm:px-10 lg:px-0" style={{ fontFamily: "Merriweather, serif" }}>
        <div className="max-w-6xl">
          <h1 className="text-5xl font-bold text-center">Our Core Services</h1>
          <p className="mt-12 text-center">We help educational instutions grow through targeted development and research initiatives.</p>
          <div className="mt-20 flex flex-col sm:flex-row gap-8 justify-center">
            <div className="bg-white rounded-lg shadow-lg text-center p-6 w-full sm:w-[400px] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105">
              <center><Presentation className="w-12 h-12 justify-center text-green-800 mb-4" /></center>
              <h2 className="text-xl font-semibold mb-4">Training & Workshops</h2>
              <p>Seminars, capacity building programs, and hands-on training for teachers and administrators.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center p-6 w-full sm:w-[400px] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105">
              <center><BriefcaseBusiness className="w-12 h-12 text-green-800 mb-4" /></center>
              <h2 className="text-xl font-semibold mb-4">Educational Consulting</h2>
              <p>School Management, strategic planning, and institutional development support.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center p-6 w-full sm:w-[400px] transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105">
              <center><BookOpenText className="w-12 h-12 justify-center text-green-800 mb-4" /></center>
              <h2 className="text-xl font-semibold mb-4">Research & Publication</h2>
              <p>Surveys, innovation research, and publication of educational materials.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
