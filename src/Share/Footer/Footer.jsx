function Footer() {
  return (
    <footer className="bg-[#fffafa] text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Links */}
        <div>
          <h6 className="font-semibold mb-3">Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Company</a></li>
            <li><a href="#" className="hover:text-red-500">Products</a></li>
            <li><a href="#" className="hover:text-red-500">Projects</a></li>
          </ul>
        </div>

        {/* Training */}
        <div>
          <h6 className="font-semibold mb-3">Training</h6>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Flutter</a></li>
            <li><a href="#" className="hover:text-red-500">NodeJS</a></li>
            <li><a href="#" className="hover:text-red-500">Laravel</a></li>
          </ul>
        </div>

        {/* Our Address */}
        <div>
          <h6 className="font-semibold mb-3">Our Address</h6>
          <p className="text-gray-600">
            D/36, Block-E Lalmatia, Dhaka<br />
            1207, Bangladesh
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="#" className="hover:text-red-500"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="hover:text-red-500"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h6 className="font-semibold mb-3">Get In Touch</h6>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your Email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none" 
            />
            <button className="bg-red-400 text-white px-4 rounded-r-md hover:bg-red-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © 2025 All Rights Reserved Design by 
        <span className="text-red-500 font-semibold"> Deshi-IT BD</span>
      </div>
    </footer>
  )
}

export default Footer;
