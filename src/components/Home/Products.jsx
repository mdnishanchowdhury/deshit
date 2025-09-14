import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import group1 from "../../assets/Group/Group11.jpg";
import group2 from "../../assets/Group/Group22.jpg";
import group3 from "../../assets/Group/Group33.jpg";
import group4 from "../../assets/Group/Group44.jpg";
import group5 from "../../assets/Group/Group55.jpg";
import group6 from "../../assets/Group/Group66.jpg";

function Products() {
    const products = [
        { image: group1, product: "Gym Management System" },
        { image: group2, product: "Transpiration Tracker" },
        { image: group3, product: "Parcel Delivery App" },
        { image: group4, product: "School Management System" },
        { image: group5, product: "Inventory Management System" },
        { image: group6, product: "Logistics Management System" },
    ];

    const { scrollY } = useScroll();
    const ellipseOpacity = useTransform(scrollY, [0, 600], [0, 1]);
    const ellipseYRaw = useTransform(scrollY, [0, 600], [-150, 0]);
    const ellipseY = useSpring(ellipseYRaw, { stiffness: 50, damping: 20 });

    return (
        <div className="w-full pb-10 md:pb-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center pb-5 md:pb-7">
                    Our <span className="text-[#FA8370]">Products</span>
                </h2>

            {/* Card Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 px-4 sm:px-6 lg:px-0">
                    {products.map((item, index) => (
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
                            <div className="absolute left-1/2 -translate-x-1/2 top-[275px] w-[85%]  h-[106px] bg-white shadow-md rounded-2xl flex items-center justify-center">
                                <h2 className="font-poppins text-[14px] sm:text-[16px] font-semibold text-black text-center">
                                    {item.product}
                                </h2>
                            </div>
                        </motion.div>
                    ))}
                    
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

export default Products;
