import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function Card({ item, index }) {
    const { scrollY } = useScroll();
    const ellipseOpacity = useTransform(scrollY, [0, 600], [0, 1]);
    const ellipseYRaw = useTransform(scrollY, [0, 600], [-150, 0]);
    const ellipseY = useSpring(ellipseYRaw, { stiffness: 50, damping: 20 });
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative bg-base-100 mx-auto cursor-pointer flex flex-col items-center pb-20"
        >
            {/* Image */}
            <figure className="flex justify-center">
                <img
                    src={item.image}
                    alt={item.product}
                    className="w-full max-w-[404px] h-auto object-cover rounded-t-sm"
                />
            </figure>

            {/* Text Box */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[260px] md:top-[255px] lg:top-[275px] w-[85%]  h-[106px] bg-white shadow-md rounded-2xl flex items-center justify-center">
                <h2 className="font-poppins text-[14px] sm:text-[16px] font-semibold text-black text-center">
                    {item.product}
                </h2>
            </div>
        </motion.div>
    )
}

export default Card