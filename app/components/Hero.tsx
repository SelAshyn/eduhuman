export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center px-6 sm:px-10 lg:px-24">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="flex justify-center lg:justify-start mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100" style={{ fontFamily: "Roboto Slab, sans-serif" }}>
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span className="text-xs tracking-widest text-green-700 font-semibold uppercase">
                Transforming Education
              </span>
            </div>
          </div>

          {/* Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900" style={{ fontFamily: "Merriweather, serif" }}>
            Empowering Educators.
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-green-800 mt-2" style={{ fontFamily: "Merriweather, serif" }}>
            Advancing Nepal’s Future.
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ fontFamily: "Ubuntu, sans-serif" }}>
            Professional training, research, consulting, and digital solutions
            designed to elevate schools and institutions across Nepal.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ fontFamily: "Ubuntu, sans-serif" }}>

            <a
              href="#"
              className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium text-center transition-all duration-300 hover:bg-gray-800 hover:scale-[1.02]"
            >
              Explore Programs
            </a>

            <a
              href="#"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-900 text-sm font-medium text-center transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02]"
            >
              Get Consultation
            </a>
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="hidden lg:flex justify-center">
          <div className="relative w-full max-w-[520px]">

            {/* Softer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-tr from-green-100 via-blue-100 to-transparent rounded-[36px] blur-2xl opacity-50"></div>

            {/* Image */}
            <div className="relative rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(34,120,100,0.8)] transition-all duration-500 hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                alt="Education"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
