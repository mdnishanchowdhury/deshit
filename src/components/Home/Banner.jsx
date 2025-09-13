import banner1 from '../../assets/Banner/banner.jpg';
import mobile2 from '../../assets/Banner/mobile.png';
import Ellipse_1 from '../../assets/Banner/Ellipse_1.png';

function Banner() {
  return (
    <section
      className="relative h-auto md:h-[935px] flex items-center bg-cover bg-center px-3 md:px-6"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* image */}
      <div className="absolute -top-10 -left-[60px] sm:-top-14 sm:-left-[80px] md:-top-16 md:-left-[120px]">
        <img src={Ellipse_1} alt="" className="w-[300px] sm:w-[500px] md:w-[733px] h-auto" />
      </div>


      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full max-w-[1322px] mx-auto  lg:px-0 ">

        {/* Left Text Section */}
        <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-6">
          <div className="text-center md:text-left  pt-8 md:pt-[87px] space-y-4 md:space-y-[29px]">
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-white font-bold">
              Outstanding Business
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-normal text-white">
              Needs Better Apps
            </h1>
            <p className="text-[15px] sm:text-base md:text-[18px] font-normal text-white">
              We build impactful Apps
            </p>

            <button className="border-[#FFF] border-1 hover:bg-blue-100 transition-colors px-8 py-2 rounded-full text-white text-[15px] font-normal hover:text-black">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-20 md:mt-0 md:mr-11 flex justify-center md:justify-end w-full md:w-1/2">
          <img
            src={mobile2}
            alt="Preview of our mobile app"
            className="w-56 sm:w-72 md:w-96 h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
