import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#fffafa] text-gray-700 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto border-t border-gray-300 pt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h6 className="text-xl font-medium font-poppins text-black mb-6">Links</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">Company</a></li>
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">Products</a></li>
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">Projects</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h6 className="text-xl font-medium font-poppins text-black mb-6">Training</h6>
          <ul className="space-y-2">
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">Flutter</a></li>
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">NodeJS</a></li>
            <li><a href="#" className="text-[16px] font-normal font-poppins text-black hover:text-red-500">Laravel</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h6 className="text-xl font-medium font-poppins text-black mb-6">Our Address</h6>
          <p className="text-[16px] font-normal font-poppins text-black">
            D/36, Block-E Lalmatia, Dhaka<br />
            1207, Bangladesh
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <FaFacebook className="w-10 h-10 hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="w-10 h-10 hover:text-red-500 cursor-pointer" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h6 className="text-xl font-medium font-poppins text-black mb-6">Get In Touch</h6>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="text-[16px] text-white font-normal font-poppins bg-[#FA7470] rounded-[5px] hover:bg-red-500 w-full px-5 py-3 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom*/}
      <motion.div
        className="text-center text-gray-500 text-[16px] font-normal font-poppins mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        © 2025 All Rights Reserved Design by
        <span className="text-red-500 font-semibold"> Deshi-IT BD</span>
      </motion.div>
    </footer>
  );
}

export default Footer;
