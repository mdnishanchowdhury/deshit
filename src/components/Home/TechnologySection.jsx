import { FaNodeJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiFigma, SiVuedotjs, SiFlutter } from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = [
  { icon: FaNodeJs, color: "text-green-600" },
  { icon: FaReact, color: "text-blue-400" },
  { icon: SiFigma, color: "text-pink-500" },
  { icon: SiVuedotjs, color: "text-green-500" },
  { icon: SiFlutter, color: "text-sky-400" },
  { icon: FaLaravel, color: "text-red-500" },
];

function TechnologySection() {
  return (
    <section className="py-16 text-center">
      <motion.h2
        className="text-3xl font-medium font-poppins mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="text-[#FA8370]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Technology
        </motion.span>{" "}
        We Use
      </motion.h2>

      <div className="flex justify-center items-center flex-wrap gap-16 md:gap-36">
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              whileHover={{ scale: 1.2 }}
              className="cursor-pointer"
            >
              <IconComponent className={`${tech.color} w-16 h-16`} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default TechnologySection;
