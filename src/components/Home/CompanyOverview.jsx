import frame from '../../assets/icon/Frame.jpg';
import frame1 from '../../assets/icon/Frame-1.jpg';
import frame2 from '../../assets/icon/Group.jpg';
import { motion } from "framer-motion";

export default function CompanyOverview() {
    return (
        <section className="w-full px-3 md:px-6 py-6 md:py-20">
            <div className="max-w-[1322px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-start lg:items-center gap-10">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <h2 className="text-2xl md:text-[32px] font-semibold mb-4">
                        DeshIT-Bd
                    </h2>
                    <p className="text-[16px] font-normal leading-relaxed">
                        Started its journey with the determination of enabling organizations to leverage technology for betterment. Our priority is to deliver impact solutions with superior user experience. We are highly design focused and practice SCRUM to meet clients’ requirements and deliver solutions in time and within budget.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                    {/*  App Development */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1"
                    >
                        <img src={frame} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium">7+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Years Experience in <br /> App Development
                        </p>
                    </motion.div>

                    {/*  Mobile Apps Developed */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1"
                    >
                        <img src={frame1} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium">30+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Mobile Apps <br /> Developed
                        </p>
                    </motion.div>

                    {/*  Websites Developed */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: true }}
                        className="col-span-2 md:col-span-1 w-full md:w-[220px] p-6 bg-white shadow-md rounded-md border border-gray-100 flex flex-col justify-center items-center space-y-1"
                    >
                        <img src={frame2} alt="" className="w-16 h-16" />
                        <h3 className="text-2xl md:text-3xl font-medium">25+</h3>
                        <p className="text-sm md:text-base text-[#A0A0A0] font-normal text-center">
                            Websites <br /> Developed
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
