import Image from "next/image";

export default function Footer(){
  return(
    <>
      <div className="bg-white text-black py-10 px-4 sm:px-10 lg:px-0 mt-20" style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <div className="p-10 mx-auto flex flex-col md:flex-row justify-between items-top gap-14">
          <div className="mr-10">
            <Image src="/logo.png" alt="EduHuman Logo" className="mb-2" width={40} height={40} />
            <h1 className="text-2xl">EduHuman</h1>
            <h2 className="text-lg">Resource Development and Research Center <br /> Pvt. Ltd.</h2>
            <p className="text-sm text-gray-600">Budhanilkantha-11, Kathmandu, Nepal</p>
          </div>
          <div>
            <h1 className="text-lg">Quick Links</h1>
            <br />
            <a href="" className="text-sm text-gray-600 hover:underline">About Us</a> <br />
            <a href="" className="text-sm text-gray-600 hover:underline">Services</a> <br />
            <a href="" className="text-sm text-gray-600 hover:underline">Upcoming Programs</a> <br />
            <a href="" className="text-sm text-gray-600 hover:underline">Research Publications</a>
          </div>
          <div>
            <h1 className="text-lg">Contact Us</h1>
            <br />
            <p className="text-sm text-gray-600">Phone: +977-1-1234567</p>
            <p className="text-sm text-gray-600">Email: info@eduhuman.edu.np</p>
            <p className="text-sm text-gray-600">Follow us on social media for updates and insights.</p>
          </div>
          <div>
            <h1 className="text-lg">Follow Us</h1>
            <br />
            <p className="text-sm text-gray-600">Facebook | Twitter | LinkedIn | Instagram</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-10">
          <hr className="w-full border-t border-gray-300"/>
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">© 2082 EduHuman Resource Development and Research Center Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}
