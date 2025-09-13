import frame from '../../assets/icon/Frame.jpg';
import frame1 from '../../assets/icon/Frame-1.jpg';
import frame2 from '../../assets/icon/Group.jpg';
export default function CompanyOverview() {
    return (
        <section className="w-full px-3 md:px-6 py-6 md:py-20">
            <div className="max-w-[1322px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-start lg:items-center gap-10 ">

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
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {/*  App Development*/}
                    <div className="w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1">
                        <img src={frame} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium ">7+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Years Experience in <br /> App Development
                        </p>
                    </div>
                    {/*  Mobile Apps Developed*/}
                    <div className="w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1">
                        <img src={frame1} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium ">30+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Mobile Apps <br /> Developed
                        </p>
                    </div>
                    {/*   Websites Developed*/}
                    <div className="col-span-2 md:col-span-1  w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1">
                        <img src={frame2} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium ">25+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Websites <br /> Developed
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
