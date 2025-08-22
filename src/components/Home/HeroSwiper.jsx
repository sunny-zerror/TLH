import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";

const swiperData = [
  {
    img: "/images/Hero swiper/pic_1.jpg",
    title: "Professional dry cleaning",
  },
  {
    img: "/images/Hero swiper/pic_2.jpg",
    title: "Revive Your Shoes & Bags",
  },
  {
    img: "/images/Hero swiper/pic_3.jpg",
    title: "Expert Cleaning and Care!",
  },
  {
    img: "/images/Hero swiper/pic_4.jpg",
    title: "Bridal Elegance, Restored with Care",
  },
];

const HeroSwiper = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null); // start with null so no bar animates instantly

  // Trigger first bar animation after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex(0);
    }, 50); // small delay lets CSS transition kick in
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Titles & Progress Bars */}
      <div className="w-full absolute flex px-10 text-white gap-10 items-center justify-between bottom-5 h-24 z-[9]">
        {swiperData.map((item, index) => (
          <div
            key={index}
            className={`w-[25%] cursor-pointer transition-opacity duration-500 ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(index);
              }
            }}
          >
            <p className="">{item.title}</p>
            <div className="w-full h-[2px] relative bg-white/40 rounded-full overflow-hidden">
              <div
                className={`absolute h-full bg-white transition-all duration-[3500ms] ease-linear`}
                style={{
                  width: activeIndex === index ? "100%" : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={600}
        loop
        className="w-full h-full"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // update active index
      >
        {swiperData?.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full center">
              <img
                className="w-full h-full object-cover brightness-[.8]"
                src={image.img}
                alt={image.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
