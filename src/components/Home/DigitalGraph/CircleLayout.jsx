import { useState, useEffect } from "react";

const CircleLayout = ({ items }) => {
  const [radius, setRadius] = useState(150);
  const [iconSize, setIconSize] = useState(48);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setRadius(80);
        setIconSize(32);
      } else if (width < 1024) {
        setRadius(130);
        setIconSize(40);
      } else {
        setRadius(150);
        setIconSize(48);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const angleStep = (2 * Math.PI) / items.length;

  const getPosition = (index) => {
    const angle = index * angleStep;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="absolute left-1/2 top-1/2">
      {
        items.map((item, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={index}
              className={`absolute flex items-center justify-center text-center ${item.extraClass || ""}`}
              style={{
                transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`,
              }}
            >
              <div
                className={`flex gap-2 items-center
                ${item.layout === "row" ? "flex-row" : ""}
                ${item.layout === "row-reverse" ? "flex-row-reverse" : ""}
                ${item.layout === "col" ? "flex-col" : ""}
                ${item.layout === "col-reverse" ? "flex-col-reverse" : ""}`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="bg-white rounded-full"
                  style={{ width: iconSize, height: iconSize }}
                />
                <h2
                  className="text-xs font-bold font-poppins"
                  style={{ fontSize: iconSize / 4 }}
                >
                  {item.title}
                </h2>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default CircleLayout;
