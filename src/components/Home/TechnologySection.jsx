import { FaNodeJs, FaReact, FaLaravel } from "react-icons/fa";
import { SiFigma, SiVuedotjs, SiFlutter } from "react-icons/si";

function TechnologySection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-medium font-poppins mb-10">
        <span className="text-[#FA8370]">Technology</span> We Use
      </h2>

      <div className="flex justify-center items-center gap-36 text-6xl">
        <FaNodeJs className="text-green-600 w-16 h-16"></FaNodeJs>
        <FaReact className="text-blue-400 w-16 h-16"></FaReact>
        <SiFigma className="text-pink-500 w-16 h-16"></SiFigma>
        <SiVuedotjs className="text-green-500 w-16 h-16"></SiVuedotjs>
        <SiFlutter className="text-sky-400 w-16 h-16"></SiFlutter>
        <FaLaravel className="text-red-500 w-16 h-16"></FaLaravel>
      </div>
    </section>
  );
}
export default TechnologySection;
