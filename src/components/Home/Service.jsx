import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import group1 from "../../assets/Group/Group1.jpg";
import group2 from "../../assets/Group/Group2.jpg";
import group3 from "../../assets/Group/Group3.jpg";
import group4 from "../../assets/Group/Group4.jpg";
import group5 from "../../assets/Group/Group5.jpg";
import group6 from "../../assets/Group/Group6.jpg";
import Ellipse_2 from "../../assets/Banner/Ellipse 2.png";
import SectionCover from '../SectionCover/SectionCover'

function Service() {
    const { scrollY } = useScroll();


    const ellipseOpacity = useTransform(scrollY, [0, 600], [0, 1]);
    const ellipseYRaw = useTransform(scrollY, [0, 600], [-500, 0]);
    const ellipseY = useSpring(ellipseYRaw, { stiffness: 60, damping: 20 });

    const ourService = [
        { image: group1, service: "Mobile App Development" },
        { image: group2, service: "UI/UX Design" },
        { image: group3, service: "Software Development" },
        { image: group4, service: "Digital Marketing" },
        { image: group5, service: "Web Development" },
        { image: group6, service: "Software Quality Assurance" }
    ];

    return (
        <div className='relative w-full sm:pt-6 overflow-hidden'>

            {/* Ellipse 2 */}
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="absolute top-[400px] -left-[100px] -z-10"
            >
                <img
                    src={Ellipse_2}
                    alt="image"
                    className="w-[320px] sm:w-[500px] md:w-[400px] h-[324px] opacity-70"
                />
            </motion.div>

            <div className="max-w-[1322px] mx-auto px-6 lg:px-0">
                <div className='pb-6'>
                    <SectionCover
                        heading1={'Our'}
                        heading2={'Service'}
                        subHeading={'Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst aliquet.'}
                    />
                </div>

                {/* Card */}
                <div className="mb-10 md:mb-20 flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ourService.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                                className="card bg-base-100 shadow-sm mx-auto cursor-pointer"
                            >
                                <figure>
                                    <img
                                        src={item.image}
                                        alt={item.service}
                                        className="w-[404px] h-auto object-cover rounded-t-sm"
                                    />
                                </figure>
                                <div className="h-[64px] bg-[#020F40] rounded-b-sm flex items-center justify-center">
                                    <h2 className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-white text-center">
                                        {item.service}
                                    </h2>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
