import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#f87171] to-[#fb923c] py-16 flex justify-center items-center text-center">
      <div className="text-white space-y-4">
        <h2 className="text-3xl font-bold font-poppins">Say Hello</h2>

        <div className="flex items-center justify-center space-x-2">
          <FaPhoneAlt /> <span className="text-[16px] font-normal font-poppins">+8801812304987</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <MdEmail /> <span className="text-[16px] font-normal font-poppins">info@deshit-bd.com</span>
        </div>

        <div className="pt-4">
          <button className="text-[16px] font-normal font-poppins text-[#FA7470] bg-white px-11 py-2 rounded-full hover:bg-gray-100">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
