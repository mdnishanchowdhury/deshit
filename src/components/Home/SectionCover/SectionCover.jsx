function SectionCover({ subHeading, heading1, heading2 }) {
    return (
        <div className="w-full">
            <div className="flex justify-center">
                <div className="px-4 sm:px-8 md:px-16 lg:px-36 xl:px-72 text-center">
                    <h1 className="font-roboto text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium">
                        <span className="text-[#FA8370]">{heading1}</span> {heading2}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-[18px] font-roboto font-normal mt-2">
                        {subHeading}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SectionCover;
