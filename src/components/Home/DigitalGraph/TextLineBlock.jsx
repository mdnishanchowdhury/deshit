export function TextWithLine({ text, textClasses, lineCol, lineClasses, arrowClasses, lineRow, containerClasses, textAlign, }) {
  return (
    <>
      <div className={`absolute sm:px-52 md:px-45 lg:px-70 xl:px-0 ${containerClasses} `}>
        <div className="relative">
          <div className={`absolute p-2 border border-black bg-white ${textClasses}`}>
            <p className={`text-[10px] xl:text-xs font-roboto font-normal ${textAlign}`}>{text}</p>
          </div>

          <div className={`absolute flex items-start space-x-2 ${lineClasses}`}>
            <div className="flex flex-col items-center ml-[53px]">
              <div className={`border bg-black ${lineCol}`}></div>
              <div className="relative -mt-1">
                <div
                  className={`w-3 h-3 border-t-2 border-l-2  border-black absolute ${arrowClasses}`}
                ></div>
              </div>
            </div>
            <div className={`border-black ${lineRow}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}
