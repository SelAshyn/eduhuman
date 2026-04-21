export function Bannar(){
  return(
    <>
      <div className="flex justify-center items-center">
        <div className="min-h-[30vh] mt-30 mb-30 bg-white shadow-2xl rounded-xl w-max p-20 flex items-center justify-center" style={{ fontFamily: "Merriweather, serif" }}>
        <div className="max-w-6xl flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center">Ready to Transform Your Institution?</h1>
          <p className="mt-8 text-center">Collaborate with us for customized training, research, or digital solutions.</p>
          <button
            type="button"
            className="px-5 py-3 bg-green-800 mt-10 text-white rounded-full text-sm sm:text-base transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105">
            Explore our Program
          </button>
        </div>
      </div>
      </div>
    </>
  )
}
