export function Hero() {
  return (
    <div
      className="min-h-[calc(100vh-80px)] flex items-center justify-center lg:justify-between px-6 sm:px-10 lg:px-20 gap-8 lg:gap-12"
      style={{ fontFamily: "Merriweather, serif" }}
    >
      <div className="max-w-2xl text-center lg:text-left">
        {/* Heading */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 leading-tight">
            Empowering Educators.
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Advancing Education in Nepal.
          </h1>
        </div>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-xl mt-6 sm:mt-8 text-gray-700">
          Professional training, research, consulting & digital solutions for
          schools, colleges and educational institutions.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button
            type="button"
            className="px-5 py-3 bg-green-800 text-white rounded-full text-sm sm:text-base transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
          >
            Explore our Program
          </button>

          <button
            type="button"
            className="px-5 py-3 border-2 border-green-800 text-green-800 rounded-full text-sm sm:text-base transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105"
          >
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Image Container with Epic WOW Design */}
      <div className="hidden lg:flex items-center justify-center flex-1">
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(-20px); }
            50% { transform: translateY(20px); }
          }
          @keyframes glow-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.8), 0 0 80px rgba(16, 185, 129, 0.5); }
          }
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>

        <div className="relative w-[1000px] h-[500px]">
          {/* Outer Glow Ring 1 */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-blue-400 to-green-400 blur-3xl opacity-40 animate-pulse"></div>

          {/* Outer Glow Ring 2 */}
          <div className="absolute inset-12 rounded-full bg-gradient-to-r from-blue-500 to-green-500 blur-2xl opacity-30" style={{ animation: 'rotate-slow 8s linear infinite' }}></div>

          {/* Main Image Container with 3D Effect */}
          <div className="absolute inset-20 rounded-3xl overflow-hidden shadow-2xl" style={{ animation: 'float 4s ease-in-out infinite', boxShadow: '0 20px 60px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}>
            {/* Inner Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-green-400/50 pointer-events-none" style={{ boxShadow: 'inset 0 0 30px rgba(16, 185, 129, 0.3), 0 0 50px rgba(16, 185, 129, 0.4)' }}></div>

            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Education Program"
              className="w-full h-full object-cover"
            />

            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-green-900/10 to-transparent"></div>
          </div>

          {/* Floating Light Orbs */}
          <div className="absolute -top-8 right-12 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-3xl opacity-60" style={{ animation: 'float 5s ease-in-out infinite' }}></div>
          <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl opacity-50" style={{ animation: 'float 6s ease-in-out infinite 1s' }}></div>
          <div className="absolute top-1/3 -right-12 w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-2xl opacity-40" style={{ animation: 'float 4s ease-in-out infinite 0.5s' }}></div>
        </div>
      </div>
    </div>
  );
}
