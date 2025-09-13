import { FaMobileAlt, FaLaptopCode, FaChartLine } from "react-icons/fa";

export default function CompanyOverview() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-[32px] font-semibold mb-4">
            DeshIT-Bd
          </h2>
          <p className="text-[16px] font-normal leading-relaxed">
           Started its journey with the determination of enabling organizations to leverage technology tor betterment. Our priority is to deliver impact solutions with superior user experience. Wr are highly designed focused and practice SCRUM to meet clients requirements and deliver solutions in time and within budget.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="shadow-md border border-gray-100 rounded-xl hover:shadow-lg transition p-8 flex flex-col items-center">
            <FaMobileAlt className="w-10 h-10 text-indigo-500 mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">7+</h3>
            <p className="text-sm text-gray-600 text-center">
              Years Experience in <br /> App Development
            </p>
          </div>

          <div className="shadow-md border border-gray-100 rounded-xl hover:shadow-lg transition p-8 flex flex-col items-center">
            <FaLaptopCode className="w-10 h-10 text-pink-500 mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">30+</h3>
            <p className="text-sm text-gray-600 text-center">
              Mobile Apps <br /> Developed
            </p>
          </div>

          <div className="shadow-md border border-gray-100 rounded-xl hover:shadow-lg transition p-8 flex flex-col items-center">
            <FaChartLine className="w-10 h-10 text-green-500 mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">25+</h3>
            <p className="text-sm text-gray-600 text-center">
              Websites <br /> Developed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
