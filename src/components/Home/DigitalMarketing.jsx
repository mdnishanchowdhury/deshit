import icon1 from "../../assets/icon/icon1.png";
import icon2 from "../../assets/icon/icon2.png";
import icon3 from "../../assets/icon/icon3.png";
import icon4 from "../../assets/icon/icon4.png";
import icon5 from "../../assets/icon/icon5.png";
import icon6 from "../../assets/icon/icon6.png";
import icon7 from "../../assets/icon/icon7.png";
import icon8 from "../../assets/icon/icon8.png";
import icon9 from "../../assets/icon/icon9.png";
import SectionCover from "../SectionCover/SectionCover";
import CircleLayout from "./DigitalGraph/CircleLayout";
import { TextWithLine } from "./DigitalGraph/TextLineBlock";
import { motion } from "framer-motion";

export default function DigitalMarketing() {
    const items = [
        { icon: icon3, title: "LinkedIn Marketing", layout: "row" },
        { icon: icon4, title: "Video Editing", layout: "row", extraClass: " -mt-[10px]" },
        { icon: icon5, title: "Content Development", layout: "col" },
        { icon: icon6, title: "TikTok Marketing", layout: "col" },
        { icon: icon7, title: "SEO Marketing", layout: "row-reverse", extraClass: "-ml-[5px] -mt-[5px]" },
        { icon: icon8, title: "Graphic Design", layout: "row-reverse" },
        { icon: icon9, title: "Content Writing", layout: "row-reverse" },
        { icon: icon1, title: "Google Marketing", layout: "col-reverse", extraClass: "-mt-[10px]" },
        { icon: icon2, title: "Meta FB Marketing", layout: "row" },
    ];

    const item = [
        {
            text: "Researching and writing relevant, semantically tagged articles that readers will find interesting, useful and share, hence bettering your company’s position on the internet.",
            containerClasses: "left-[40px] -top-[115px] md:top-[10px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[50px] md:-top-[135px] w-[300px] md:w-[333px] ",
            lineClasses: "left-[28px] -top-[85px] md:left-[178px] md:-top-[70px]",
            arrowClasses: "rotate-45 -top-[27px] md:-top-[10px] -left-[12px] md:-left-[61px]",
            lineCol: "h-[35px] md:h-[20px] mt-[155px] md:mt-[10px] -mb-[4px] -ml-[12px] md:-ml-[111px]",
            lineRow: "md:w-[295px] md:h-[25px] border-t-2 border-r-2 -ml-[64px] mt-[30px]",
            textAlign: "text-end"
        },
        {
            text: "Producing innovative ways of representing both the message and the graphics of the brand to an audience, so as to pass the intended message through beautiful and creative graphics.",
            containerClasses: "left-[40px] -top-[190px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[30px] md:-top-[30px] w-[300px] md:w-[333px] ",
            lineClasses: "-left-[60px] top-[20px] md:left-[178px] md:top-[50px]",
            arrowClasses: "rotate-130 md:rotate-45  -top-[2px] md:-top-[21px] -left-[10px] md:-left-[61px] ",
            lineCol: "w-[15px] md:w-[0px]  md:h-[25px] md:mt-[5px] -mb-[px] -ml-[12px] md:-ml-[111px]",
            lineRow: "w-[213px] md:w-[205px] h-[45px] md:h-[0px] -rotate-90 md:rotate-0 border-t-2  border-l-2 -ml-[108px] md:-ml-[64px] mt-[84px]  md:mt-[30px]",
            textAlign: "text-end"
        },
        {
            text: "Search engine: Enhancing your website and contents to appear more often on search engines, thus increasing on traffic and popularity.",
            containerClasses: "left-[40px] -top-[190px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[40px] -top-[75px] md:top-[220px] w-[300px] md:w-[333px] ",
            lineClasses: "-left-[70px] -top-[40px] md:left-[178px] md:top-[200px]",
            arrowClasses: "rotate-130 md:rotate-222  -top-[3px] md:-top-[8px] -left-[5px] md:-left-[62px] ",
            lineCol: "w-[25px]  md:w-[0px]  md:h-[65px] md:-mt-[50px] -ml-[12px] md:-ml-[111px]",
            lineRow: "w-[325px] md:w-[225px] h-[45px] md:h-[10px] -rotate-90 md:rotate-0 border-t-2 border-l-2 md:border-r-2  -ml-[174px] md:-ml-[64px] mt-[140px] md:-mt-[50px]",
            textAlign: "text-end"
        },
        {
            text: "Engaging generation Z and millennials on the virality of growing creative networking TikTok for increasing brand popularity and outreach on an international level.",
            containerClasses: "left-[40px] top-[370px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[80px] -top-[75px] md:top-[320px] w-[300px] md:w-[333px] ",
            lineClasses: "-left-[80px] -top-[40px] md:left-[178px] md:top-[500px]",
            arrowClasses: "rotate-130 md:rotate-45 -top-[3px] md:-top-[60px] -left-[5px] md:-left-[1px] ",
            lineCol: "w-[14px]  md:w-[0px]  md:h-[65px] mt-[1.6px] md:-mt-[105px] ml-[3px] md:ml-[10px]",
            lineRow: "w-[120px] md:w-[280px] h-[162px] md:h-[150px] -rotate-180 md:rotate-0 border-b-2 border-r-2  -ml-[24px] md:-ml-[9px] -mt-[159px] md:-mt-[189px]",
            textAlign: "text-end"
        },
        {
            text: "Creating and grouping powerful content strategies for the specific audience to attract and convert them on different channels using the same brand message.",
            containerClasses: "left-[40px] top-[200px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[750px] top-[20px] md:top-[330px] w-[300px] md:w-[366px] ",
            lineClasses: "left-[150px] -top-[30px] md:left-[560px] md:top-[510px]",
            arrowClasses: "rotate-220 md:rotate-45 -top-[10px] md:-top-[20px] -left-[26px] md:left-[150px] ",
            lineCol: "w-[0px]  md:w-[0px] h-[25px] md:h-[25px] mt-[15px] md:-mt-[105px] -ml-[40px] md:ml-[312px]",
            lineRow: "w-[20px] md:w-[302px] h-[50px] md:h-[110px] -rotate-180 md:rotate-0 md:border-b-2 md:border-l-2  -ml-[128px] md:-ml-[310px] -mt-[77px] md:-mt-[189px]",
            textAlign: "text-start"
        },
        {
            text: "Converting shot scenes into great and engaging videos by the inclusion appropriate editorial cuts, perfect transition and corporate Hollywood style that in telling the story of your brand.",
            containerClasses: "left-[0px] top-[280px] md:left-[0px] md:top-[10px]",
            textClasses: "left-[40px] md:left-[800px] top-[90px] md:top-[240px] w-[300px] md:w-[366px] ",
            lineClasses: "left-[350px] -top-[90px] md:left-[300px] md:top-[297px]",
            arrowClasses: "rotate-320 md:rotate-220 -top-[2px] md:-top-[9px] -left-[52px] md:left-[306px] ",
            lineCol: "w-[15px]  md:w-[0px]  md:h-[15px] mt-[198px] md:-mt-[75px] -ml-[88px] md:ml-[625px]",

            lineRow: "w-[40px] md:w-[180px] h-[275px] md:h-[0px] -rotate-180 md:rotate-180 border-b-2  border-l-2  -ml-[85px] md:-ml-[190px] -mt-[77px] md:-mt-[75px]",
            textAlign: "text-start"
        },
        {
            text: "Use of LinkedIn in developing professional connection, marketing your company and creating leads through the creation and connection of relevant post.",
            containerClasses: "left-[40px] top-[280px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[850px] top-[160px] md:top-[145px] w-[300px] md:w-[366px] ",
            lineClasses: "left-[315px] -top-[5px] md:left-[340px] md:top-[200px]",
            arrowClasses: "rotate-320 md:rotate-220 -top-[3px] md:-top-[9px] -left-[55px] md:left-[306px] ",
            lineCol: "w-[35px]  md:w-[0px]  md:h-[15px] mt-[199px] md:-mt-[75px] -ml-[78px] md:ml-[625px]",

            lineRow: "w-[42px] md:w-[180px] h-[400px] md:h-[0px] -rotate-180 md:rotate-180 border-b-2  border-l-2  -ml-[70px] md:-ml-[190px] -mt-[200px] md:-mt-[75px]",
            textAlign: "text-start"
        },
        {
            text: "Leveraging on the available and efficient Facebook tools for advertisement promotions, customer interaction and brand visibility on the biggest social network.",
            containerClasses: "left-[40px] -top-[115px] md:top-[10px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[840px] -top-[300px] md:top-[20px] w-[300px] md:w-[366px] ",
            lineClasses: "left-[278px] -top-[355px] md:left-[780px] md:-top-[80px]",
            arrowClasses: "rotate-320  md:rotate-220 -mt-[14px] md:-mt-[3px] top-[4px] md:-top-[20px] -left-[18px] md:left-[201px]",
            lineCol: "w-[50px] md:w-[0px] h-[0px] md:h-[40px]  -mb-[350px] -mb-[400px] md:-mb-[0px] mt-[490px] md:mt-[60px]  -ml-[42px] md:-ml-[133px]",
            lineRow: "w-[25px] md:w-[275px] h-[410px] md:h-[25px] border-t-2 border-r-2 md:-ml-[75px] mt-[82px] md:mt-[60px] -ml-[32px] md:-ml-[0px]",
            textAlign: "text-start"
        },
        {
            text: "The creation of compelling Google Ads campaigns targeting the users, obtaining a high level of efficiency, and expanding the overall impact on your business.",
            containerClasses: "left-[40px] -top-[115px] md:top-[10px] md:left-[0px] md:top-[10px]",
            textClasses: "md:left-[680px] -top-[225px] md:-top-[120px] w-[300px] md:w-[366px] ",
            lineClasses: "left-[268px] -top-[415px] md:left-[590px] md:-top-[215px]",
            arrowClasses: "rotate-320  md:rotate-220 mt-[57px] md:-mt-[40px] top-[70px] md:-top-[25px] -left-[14px] md:left-[200px]",
            lineCol: "w-[120px] md:w-[0px] h-[0px] md:h-[80px]  -mb-[400px] md:-mb-[0px] mt-[490px] md:mt-[60px]  -ml-[122px] md:-ml-[34px]",
            lineRow: "w-[15px] md:w-[225px] h-[272px] md:h-[25px] border-t-2 border-r-2 md:-ml-[26px] mt-[220px] md:mt-[60px] -ml-[23px] md:-ml-[0px]",
            textAlign: "text-start"
        },


    ];

    return (

        <motion.div
            className="flex flex-col justify-center items-center py-10 pb-[350px] md:pb-[192px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className='mb-[450px] md:mb-[180px]'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <SectionCover
                    heading1={'Digital'}
                    heading2={'Marketing'}
                    subHeading={'Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst aliquet.'}
                />
            </motion.div>

            <motion.div className="relative w-full max-w-[1200px] flex justify-center items-center">
                <div>
                    {item.map((itm, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <TextWithLine {...itm} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex w-[150px] md:w-[280px] h-[150px] md:h-[280px] border-4 border-black rounded-full items-center justify-center text-center shadow-md z-20"
                    >
                        <h2 className="text-xs md:text-3xl font-extrabold font-poppins leading-tight">
                            Digital <br /> Marketing
                        </h2>
                    </div>
                    <CircleLayout items={items} />
                </motion.div>
            </motion.div>
        </motion.div>

    );
}
