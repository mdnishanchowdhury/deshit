import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import icon1 from "../../assets/clientIcon/icon1.png";
import icon3 from "../../assets/clientIcon/icon3.png";
import icon4 from "../../assets/clientIcon/icon4.png";
import icon5 from "../../assets/clientIcon/icon5.png";
import icon6 from "../../assets/clientIcon/icon6.png";
import client from "../../assets/clientIcon/client.png";
import Ellipse from "../../assets/clientIcon/Ellipse.png";

const ClientsSection = () => {
    const { scrollY } = useScroll();
    const ellipseYRaw = useTransform(scrollY, [0, 600], [-500, 0]);
    const ellipseY = useSpring(ellipseYRaw, { stiffness: 60, damping: 20 });
    const ellipseOpacity = useTransform(scrollY, [0, 600], [0, 1]);

    return (
        <section className="relative bg-[#FDF8F8] mt-4 pt-[247px] pb-[120px] flex flex-col items-center text-center">

            <motion.img
                src={Ellipse}
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="absolute top-0 right-0 w-[320px] sm:w-[500px] md:w-[500px] opacity-70 z-[50]"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-white shadow-md rounded-xl px-2.5 py-5"
            >
                <h2 className="flex justify-center">
                    <img src={client} className="w-40 h-[60px] object-cover" alt="" />
                </h2>
                <p className="text-xl font-normal text-[#717171] leading-relaxed w-[358px] md:w-[608px] h-auto">
                    DeshIT-BD’s professionalism and expertise shone throughout the app development process, delivering a high-quality app within the aged time frame and budget. Their exceptional post-launch support ensures a seamless user experience.
                </p>
                <p className="mt-6 text-xl font-normal text-[#717171] font-poppins">CEO</p>
                <p className="text-xl font-normal font-poppins text-black">ESBO ltd</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-12"
            >
                <h4 className="text-xs tracking-widest text-red-400 font-semibold">CLIENTS</h4>
                <h2 className="text-2xl font-semibold text-red-500">Who We Work With</h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                className="flex flex-wrap justify-center items-center gap-10 mt-8 text-5xl text-gray-700"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.2 } },
                }}
            >
                {[icon1, client, icon3, icon4, icon5, icon6].map((src, index) => (
                    <motion.img
                        key={index}
                        src={src}
                        alt=""
                        className="w-[100px] h-auto object-cover"
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                ))}
            </motion.div>
        </section>
    );
};

export default ClientsSection;
