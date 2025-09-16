import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section className="bg-gradient-to-r from-[#f87171] to-[#fb923c] py-16 flex justify-center items-center text-center">
      <div className="text-white space-y-4">
        {/* Title */}
        <h2 className="text-xl font-semibold">Say Hello</h2>

        {/* Phone */}
        <div className="flex items-center justify-center space-x-2">
          <FaPhoneAlt />
          <span>+8801812304987</span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center space-x-2">
          <MdEmail />
          <span>info@deshit-bd.com</span>
        </div>

        {/* Button */}
        <div className="pt-4">
          <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
