import group1 from "../../assets/Group/Group1.jpg";

import SectionCover from './SectionCover/SectionCover'

function Service() {
    return (
        <div className='w-full px-3 md:px-6 py-6 md:py-20'>
            <div className="max-w-[1322px] mx-auto px-6 lg:px-0">
                {/* Section Title */}
                <div className='pb-6'>
                    <SectionCover
                        heading1={'Our'}
                        heading2={'Service'}
                        subHeading={'Lorem ipsum dolor sit amet consectetur. Fringilla mauris vel felis vitae. Id quisque urna sed eget facilisi. Nulla pretium odio dictumst aliquet.'}
                    ></SectionCover>
                </div>
                {/* Card */}
                <div className="mb-20 flex justify-center ">
                    <div className="card bg-base-100 w-[350px] md:w-[424px]  shadow-sm">
                        <figure>
                            <img
                                src={group1} alt="Shoes" />
                        </figure>
                        <div className="h-[64] bg-[#020F40] rounded-b-sm">
                            <h2 className="font-roboto text-2xl md:text-[28px] font-medium text-white text-center py-2.5">Mobile App Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service