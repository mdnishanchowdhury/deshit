import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#f87171] to-[#fb923c] py-16 flex justify-center items-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="text-white space-y-6"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold font-poppins">
          Say Hello
        </motion.h2>

        <motion.div variants={itemVariantsRight} className="flex items-center justify-center space-x-2">
          <FaPhoneAlt />
          <span className="text-[16px] font-normal font-poppins">+8801812304987</span>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2">
          <MdEmail />
          <span className="text-[16px] font-normal font-poppins">info@deshit-bd.com</span>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="pt-4">
          <button className="text-[16px] font-normal font-poppins text-[#FA7470] bg-white px-11 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300">
            Free Consultation
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
