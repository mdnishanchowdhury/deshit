import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import group1 from "../../assets/Group/Group111.jpg";
import group2 from "../../assets/Group/Group222.jpg";
import group3 from "../../assets/Group/Group333.jpg";
import group4 from "../../assets/Group/Group444.jpg";
import group5 from "../../assets/Group/Group555.jpg";
import group6 from "../../assets/Group/Group666.jpg";
import Card from "./Card";
import Ellipse_2 from "../../assets/Banner/Ellipse_4.png";
function DevelopedProjects() {
    const { scrollY } = useScroll();

    const ellipseOpacity = useTransform(scrollY, [0, 600], [0, 1]);
    const ellipseYRaw = useTransform(scrollY, [0, 600], [-500, 0]);
    const ellipseY = useSpring(ellipseYRaw, { stiffness: 60, damping: 20 });


    const products = [
        { image: group1, product: "Swoop News" },
        { image: group2, product: "Telefood" },
        { image: group3, product: "সহজ কুরআন শিক্ষা" },
        { image: group4, product: "Sleeptot-Baby White Noise" },
        { image: group5, product: "SBI General Secure" },
        { image: group6, product: "LCinebaz" },
    ];

    return (
        <div className="relative w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center pb-5 md:pb-7">
                Our <span className="text-[#FA8370]">Developed</span> Projects
            </h2>

            {/* Ellipse 2 */}
            <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="absolute -top-[320px] right-[10px] -z-10"
            >
                <img
                    src={Ellipse_2}
                    alt="image"
                    className="w-[320px] sm:w-[500px] md:w-[1206px] h-full opacity-70"
                />
            </motion.div>

            {/* Card */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-6 lg:px-0">
                    {
                        products.map((item, index) => (
                            <Card key={index} index={index} item={item}></Card>
                        ))
                    }

                </div>
            </div>
            <div className="  flex justify-center py-7 md:py-20 lg:py-7">
                <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="font-poppins bg-[#FA8370] text-white hover:bg-blue-100 transition-colors px-8 py-2 rounded-full text-[15px] font-normal hover:text-black"
                >
                    More
                </motion.button>
            </div>
        </div>
    );
}

export default DevelopedProjects;
