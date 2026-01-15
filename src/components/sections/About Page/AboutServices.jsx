import ServiceBtn from "@/components/Buttons/ServiceBtn";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    img: "/images/about page/img_1.webp",
    title: "Safe for Your Body",
    points: [
      "Premium European skin-safe detergents",
      "Free from harmful chemicals & disruptors",
      "Gentle care for sensitive skin",
    ],
  },
  {
    img: "/images/about page/img_2.webp",
    title: "Technology & Skill",
    points: [
      "Advanced fabric-specific machines",
      "Eco-friendly cleaning processes",
      "Handled by trained master cleaners",
    ],
  },
  {
    img: "/images/services/4_Wedding Couturer.webp",
    title: "Wedding Couture",
    points: [
      "Specialized care for bridal & couture wear",
      "Safe handling of delicate fabrics & embellishments",
      "Preserves structure, color, and luxury finish",
    ],
  },
];

const AboutServices = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "linear" },
      scrollTrigger: {
        trigger: ".sticky_cards_paren",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(".stick_crd_0", { y: -40, scale: 0.95 });
    tl.to(".stick_crd_0", { y: -90, scale: 0.85 });
    tl.to(".stick_crd_1", { y: -40, scale: 0.95 }, "<");
    tl.to(".stick_crd_1", { y: -90, scale: 0.85 });
    tl.to(".stick_crd_2", { y: -40, scale: 0.95 }, "<");
  });

  return (
    <div className="hidden lg:block">
          <div className="w-full center mt-10">
                <h1 className=' hero_animate_txt_b capitalize leading-none text-2xl lg:text-6xl mb-10   '>Our Process</h1>
            </div>
      <div className="sticky_cards_paren w-full relative h-min flex flex-col gap-20 items-center">
        {services.map((card, index) => (
          <div
            key={index}
            className={`stick_crd_${index} w-[88%] bg-[#F2EDE4] flex justify-between h-[65vh] rounded-2xl sticky top-[20vh] p-10`}
          >
            {/* Left Content */}
            <div className="w-[50%] h-full flex flex-col justify-center">
              <h2 className="text-6xl">{card.title}</h2>

              <div className="border_anim w-full origin-left border mt-4 mb-16 border-dashed rounded-full border-black/30"></div>

              {/* Points */}
              <ul className="mt-4 space-y-4 text-lg list-disc pl-6">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="w-[30%] mt-10">
                <ServiceBtn />
              </div>
            </div>

            {/* Right Image */}
            <div className="w-[35%] h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src={card.img}
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutServices;
