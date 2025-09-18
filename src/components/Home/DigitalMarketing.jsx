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
            containerClasses: "left-[40px] -top-[115px] xl:top-[10px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[50px] xl:-top-[135px] w-[300px] xl:w-[333px] ",
            lineClasses: "left-[28px] -top-[85px] xl:left-[178px] xl:-top-[70px]",
            arrowClasses: "rotate-45 -top-[27px] xl:-top-[10px] -left-[12px] xl:-left-[61px]",
            lineCol: "h-[35px] xl:h-[20px] mt-[155px] xl:mt-[10px] -mb-[4px] -ml-[12px] xl:-ml-[111px]",
            lineRow: "xl:w-[295px] xl:h-[25px] border-t-2 border-r-2 -ml-[64px] mt-[30px]",
            textAlign: "text-end"
        },
        {
            text: "Producing innovative ways of representing both the message and the graphics of the brand to an audience, so as to pass the intended message through beautiful and creative graphics.",
            containerClasses: "left-[40px] -top-[190px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[30px] xl:-top-[30px] w-[300px] xl:w-[333px] ",
            lineClasses: "-left-[60px] top-[20px] xl:left-[178px] xl:top-[50px]",
            arrowClasses: "rotate-130 xl:rotate-45  -top-[2px] xl:-top-[21px] -left-[10px] xl:-left-[61px] ",
            lineCol: "w-[15px] xl:w-[0px]  xl:h-[25px] xl:mt-[5px] -mb-[px] -ml-[12px] xl:-ml-[111px]",
            lineRow: "w-[213px] xl:w-[205px] h-[45px] xl:h-[0px] -rotate-90 xl:rotate-0 border-t-2  border-l-2 -ml-[108px] xl:-ml-[64px] mt-[84px]  xl:mt-[30px]",
            textAlign: "text-end"
        },
        {
            text: "Search engine: Enhancing your website and contents to appear more often on search engines, thus increasing on traffic and popularity.",
            containerClasses: "left-[40px] -top-[190px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[40px] -top-[75px] xl:top-[220px] w-[300px] xl:w-[333px] ",
            lineClasses: "-left-[70px] -top-[40px] xl:left-[178px] xl:top-[200px]",
            arrowClasses: "rotate-130 xl:rotate-222  -top-[3px] xl:-top-[8px] -left-[5px] xl:-left-[62px] ",
            lineCol: "w-[25px]  xl:w-[0px]  xl:h-[65px] xl:-mt-[50px] -ml-[12px] xl:-ml-[111px]",
            lineRow: "w-[325px] xl:w-[225px] h-[45px] xl:h-[10px] -rotate-90 xl:rotate-0 border-t-2 border-l-2 xl:border-r-2  -ml-[174px] xl:-ml-[64px] mt-[140px] xl:-mt-[50px]",
            textAlign: "text-end"
        },
        {
            text: "Engaging generation Z and millennials on the virality of growing creative networking TikTok for increasing brand popularity and outreach on an international level.",
            containerClasses: "left-[40px] top-[370px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[80px] -top-[75px] xl:top-[320px] w-[300px] xl:w-[333px] ",
            lineClasses: "-left-[80px] -top-[40px] xl:left-[178px] xl:top-[500px]",
            arrowClasses: "rotate-130 xl:rotate-45 -top-[3px] xl:-top-[60px] -left-[5px] xl:-left-[1px] ",
            lineCol: "w-[14px]  xl:w-[0px]  xl:h-[65px] mt-[1.6px] xl:-mt-[105px] ml-[3px] xl:ml-[10px]",
            lineRow: "w-[120px] xl:w-[280px] h-[162px] xl:h-[150px] -rotate-180 xl:rotate-0 border-b-2 border-r-2  -ml-[24px] xl:-ml-[9px] -mt-[159px] xl:-mt-[189px]",
            textAlign: "text-end"
        },
        {
            text: "Creating and grouping powerful content strategies for the specific audience to attract and convert them on different channels using the same brand message.",
            containerClasses: "left-[40px] top-[200px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[750px] top-[20px] xl:top-[330px] w-[300px] xl:w-[366px] ",
            lineClasses: "left-[150px] -top-[30px] xl:left-[560px] xl:top-[510px]",
            arrowClasses: "rotate-220 xl:rotate-45 -top-[10px] xl:-top-[20px] -left-[26px] xl:left-[150px] ",
            lineCol: "w-[0px]  xl:w-[0px] h-[25px] xl:h-[25px] mt-[15px] xl:-mt-[105px] -ml-[40px] xl:ml-[312px]",
            lineRow: "w-[20px] xl:w-[302px] h-[50px] xl:h-[110px] -rotate-180 xl:rotate-0 xl:border-b-2 xl:border-l-2  -ml-[128px] xl:-ml-[310px] -mt-[77px] xl:-mt-[189px]",
            textAlign: "text-start"
        },
        {
            text: "Converting shot scenes into great and engaging videos by the inclusion appropriate editorial cuts, perfect transition and corporate Hollywood style that in telling the story of your brand.",
            containerClasses: "left-[0px] top-[280px] xl:left-[0px] xl:top-[10px]",
            textClasses: "left-[40px] xl:left-[800px] top-[90px] xl:top-[240px] w-[300px] xl:w-[366px] ",
            lineClasses: "left-[350px] -top-[90px] xl:left-[300px] xl:top-[297px]",
            arrowClasses: "rotate-320 xl:rotate-220 -top-[2px] xl:-top-[9px] -left-[52px] xl:left-[306px] ",
            lineCol: "w-[15px]  xl:w-[0px]  xl:h-[15px] mt-[198px] xl:-mt-[75px] -ml-[88px] xl:ml-[625px]",

            lineRow: "w-[40px] xl:w-[180px] h-[275px] xl:h-[0px] -rotate-180 xl:rotate-180 border-b-2  border-l-2  -ml-[85px] xl:-ml-[190px] -mt-[77px] xl:-mt-[75px]",
            textAlign: "text-start"
        },
        {
            text: "Use of LinkedIn in developing professional connection, marketing your company and creating leads through the creation and connection of relevant post.",
            containerClasses: "left-[40px] top-[280px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[850px] top-[160px] xl:top-[145px] w-[300px] xl:w-[366px] ",
            lineClasses: "left-[315px] -top-[5px] xl:left-[340px] xl:top-[200px]",
            arrowClasses: "rotate-320 xl:rotate-220 -top-[3px] xl:-top-[9px] -left-[55px] xl:left-[306px] ",
            lineCol: "w-[35px]  xl:w-[0px]  xl:h-[15px] mt-[199px] xl:-mt-[75px] -ml-[78px] xl:ml-[625px]",

            lineRow: "w-[42px] xl:w-[180px] h-[400px] xl:h-[0px] -rotate-180 xl:rotate-180 border-b-2  border-l-2  -ml-[70px] xl:-ml-[190px] -mt-[200px] xl:-mt-[75px]",
            textAlign: "text-start"
        },
        {
            text: "Leveraging on the available and efficient Facebook tools for advertisement promotions, customer interaction and brand visibility on the biggest social network.",
            containerClasses: "left-[40px] -top-[115px] xl:top-[10px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[840px] -top-[300px] xl:top-[20px] w-[300px] xl:w-[366px] ",
            lineClasses: "left-[278px] -top-[355px] xl:left-[780px] xl:-top-[80px]",
            arrowClasses: "rotate-320  xl:rotate-220 -mt-[14px] xl:-mt-[3px] top-[4px] xl:-top-[20px] -left-[18px] xl:left-[201px]",
            lineCol: "w-[50px] xl:w-[0px] h-[0px] xl:h-[40px]  -mb-[350px] -mb-[400px] xl:-mb-[0px] mt-[490px] xl:mt-[60px]  -ml-[42px] xl:-ml-[133px]",
            lineRow: "w-[25px] xl:w-[275px] h-[410px] xl:h-[25px] border-t-2 border-r-2 xl:-ml-[75px] mt-[82px] xl:mt-[60px] -ml-[32px] xl:-ml-[0px]",
            textAlign: "text-start"
        },
        {
            text: "The creation of compelling Google Ads campaigns targeting the users, obtaining a high level of efficiency, and expanding the overall impact on your business.",
            containerClasses: "left-[40px] -top-[115px] xl:top-[10px] xl:left-[0px] xl:top-[10px]",
            textClasses: "xl:left-[680px] -top-[225px] xl:-top-[120px] w-[300px] xl:w-[366px] ",
            lineClasses: "left-[268px] -top-[415px] xl:left-[590px] xl:-top-[215px]",
            arrowClasses: "rotate-320  xl:rotate-220 mt-[57px] xl:-mt-[40px] top-[70px] xl:-top-[25px] -left-[14px] xl:left-[200px]",
            lineCol: "w-[120px] xl:w-[0px] h-[0px] xl:h-[80px]  -mb-[400px] xl:-mb-[0px] mt-[490px] xl:mt-[60px]  -ml-[122px] xl:-ml-[34px]",
            lineRow: "w-[15px] xl:w-[225px] h-[272px] xl:h-[25px] border-t-2 border-r-2 xl:-ml-[26px] mt-[220px] xl:mt-[60px] -ml-[23px] xl:-ml-[0px]",
            textAlign: "text-start"
        },


    ];

    return (

        <motion.div
            className="flex flex-col justify-center items-center py-10 pb-[350px] xl:pb-[192px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className='mb-[450px] xl:mb-[180px]'
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
                    <div className="flex w-[150px] xl:w-[280px] h-[150px] xl:h-[280px] border-4 border-black rounded-full items-center justify-center text-center shadow-xl z-20"
                    >
                        <h2 className="text-xs xl:text-3xl font-extrabold font-poppins leading-tight">
                            Digital <br /> Marketing
                        </h2>
                    </div>
                    <CircleLayout items={items} />
                </motion.div>
            </motion.div>
        </motion.div>

    );
}
