import { useEffect, useState } from "react";

const slides = [
  "https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/Diaryslide.svg",
  "https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/11.svg",
  "https://scripts.myclassboard.in/cdndatastatic/MainLogin_Assets/img/8.svg",
];

export default function AutoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      
      {/* Slides Track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center"
          >
            {/* FIXED SIZE CONTAINER */}
            <div className="h-[400px] w-full flex items-center justify-center overflow-hidden">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="max-h-full max-w-[80%] object-contain block"
              />
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
}
