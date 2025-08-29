import { RiArrowRightUpLine, RiMapPinFill } from '@remixicon/react'
import React, { useEffect, useState } from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const services = [
    {
        img: "/images/services/4_Wedding Couturer.webp",
        title: "Wedding Couture",
        desc: "Specialized bridal and couture garment care that preserves intricate details, delicate fabrics, and embellishments. Perfect for pre-wedding preparation or post-event preservation.",
        cities: ["Varanasi", "Amritsar", "Udaipur", "Mysuru", "Guwahati", "Rajkot", "Vadodara", "Ranchi"],
    },
    {
        img: "/images/services/3_Home & Auto Fabrics.webp",
        title: "Home & Auto Fabrics",
        desc: "Professional cleaning solutions for upholstery, curtains, carpets, and car interiors. Our service removes deep stains, dust, and allergens to keep your living and driving spaces fresh and hygienic.",
        cities: ["Indore", "Nagpur", "Bhopal", "Coimbatore", "Surat", "Patna", "Thiruvananthapuram"],
    },
    {
        img: "/images/services/2_Shoe & Bags.webp",
        title: "Shoe & Bags",
        desc: "Expert cleaning, conditioning, and restoration for premium shoes, handbags, and leather goods. We specialize in reviving worn items, extending their life while maintaining their luxury look and feel.",
        cities: ["Chennai", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh"],
    },
    {
        img: "/images/services/1_Garment Care.webp",
        title: "Garment Care",
        desc: "The Laundry House offers premium garment care services designed to preserve the quality, feel, and freshness of every piece. Whether it's daily wear, delicate fabrics, or designer outfits, we handle each garment with expert attention and care. Our services include professional washing, stain removal, fabric-specific cleaning, ironing, and finishing – all tailored to suit your clothing’s needs.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];


const ServicesSection = () => {
    const [showAllCities, setShowAllCities] = useState({}); // track cities expanded per service

    const toggleShowAll = (index) => {
        setShowAllCities((prev) => ({
            ...prev,
            [index]: !prev[index], // toggle only for this slide
        }));
    };

    useEffect(() => {
        if (window.innerWidth < 1024) return
        const ctx = gsap.context(() => {
            const split1 = new SplitText(".service_animate_txt_a", { type: "words" });
            const split2 = new SplitText(".service_animate_txt_b", { type: "words" });
            const split3 = new SplitText(".service_animate_txt_c", { type: "words" });
            const split4 = new SplitText(".service_animate_txt_d", { type: "words" });
            const split5 = new SplitText(".service_animate_txt_e", { type: "words" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(
            //     [split1.words, split2.words],
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            // tl.fromTo(
            //     ".border_anim",
            //     { width: 0 },
            //     {
            //         width: "100%",
            //         duration: 1,
            //     }, "parallel");
            // tl.fromTo(
            //     ".slide_bg",
            //     { backgroundColor: "transparent" },
            //     {
            //         backgroundColor: "#9494941f",
            //         opacity: 1,
            //         duration: 1,
            //     }, "parallel");
            tl.fromTo(
                ".service_clip_img",
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    // filter: "blur(5px)"
                },
                {
                    delay: 0.2,
                    ease: "power2.inOut",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    // filter: "blur(0px)",
                    duration: 1,
                }, "parallel");

            // tl.fromTo(
            //     [split3.words, split4.words, split5.words, ".service_icon", ".service_btn"],
            //     { y: 10, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         delay: 0.2,
            //         duration: 0.5,
            //         stagger: 0.005,
            //     }, "parallel");

            if (window.innerWidth < 1024) return

            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services_parent",
                    start: "top top",
                    end: window.innerHeight * 4,
                    pin: true,
                    // markers: true,
                    scrub: true,
                    // toggleActions: "play none none reverse",
                }
            })
            tl2.fromTo(".slide_bg_3", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                // filter: "blur(8px)",
            }, "pa")
            tl2.fromTo(".slide_inn_3", {
                // y: 0,
                scale: 1
            }, {
                // y: -400,
                scale: 0.9
            }, "pa")
            tl2.fromTo(".slide_inn_2", {
                y: 400,
            }, {
                y: 0,
            }, "pa")

            tl2.fromTo(".slide_bg_2", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                // filter: "blur(8px)",
            }, "pa2")
            tl2.fromTo(".slide_inn_2", {
                // y: 0,
                scale: 1
            }, {
                // y: -400,
                scale: 0.9
            }, "pa2")
            tl2.fromTo(".slide_inn_1", {
                y: 400,
            }, {
                y: 0,
            }, "pa2")

            tl2.fromTo(".slide_bg_1", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }, {
                clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
                // filter: "blur(8px)",
            }, "pa3")
            tl2.fromTo(".slide_inn_1", {
                // y: 0,
                scale: 1
            }, {
                // y: -400,
                scale: 0.9
            }, "pa3")
            tl2.fromTo(".slide_inn_0", {
                y: 400,
            }, {
                y: 0,
            }, "pa3")



        });

        return () => ctx.revert();
    }, []);


    return (
        <div className=' hidden lg:flex services_parent my-16 lg:my-0  lg:h-screen w-full items-center justify-center  '>
            <div className="   lg:h-[37vw]  w-full overflow-hidden relative">
                {
                    services.map((item, index) => {
                        const showAll = showAllCities[index] || false;
                        const visibleCities = showAll ? item?.cities : item?.cities.slice(0, 4);
                        return (
                            <div key={index} className={` slide_bg_${index} top-0 mt-10 lg:mt-0 z-[${index}] blur-[0px]  w-full h-full px-5 lg:px-10 bg-[#FFFAF0] lg:absolute  left-0 overflow-hidden`}>
                                <div className={` slide_inn_${index}  slide_bg  w-full h-full p-5 lg:p-14 flex flex-col-reverse md:flex-row items-center justify-between bg-[#9494941f] rounded-xl`}>
                                    <div className=" w-full mt-5 md:mt-0 md:w-[45%] h-full flex flex-col justify-between">
                                        <p className='service_animate_txt_a  md:mb-5 opacity-80'>Our Services</p>

                                        <div className="w-full flex flex-col gap-4 justify-between h-full ">
                                            <div className="">
                                                <p className='text-3xl lg:text-6xl  service_animate_txt_b'>{item.title}</p>
                                                <div className=" border_anim  w-full origin-left md:mt-2 border  border-dashed rounded-full border-black/30"></div>
                                            </div>
                                            <p className=' text-xs lg:text-base  service_animate_txt_c'>{item.desc}</p>

                                            <div className="stores">
                                                <div className="flex md:flex-col lg:flex-row  lg:items-center gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <RiMapPinFill size={18} className='service_icon translate-y-[-2px]' />
                                                        <p className=' service_animate_txt_d text-xs lg:text-sm uppercase  '>Locate Stores:</p>
                                                    </div>
                                                    <p className=' service_animate_txt_e text-xs lg:text-sm opacity-70'>Click the location below to explore</p>
                                                </div>
                                                <div className="w-full flex flex-wrap mt-4 gap-2 ">
                                                    {visibleCities.map((store, i) => (
                                                        <button
                                                            key={i}
                                                            className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-2 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                        >
                                                            <p className="   opacity-0">{store}</p>
                                                            <p className=" group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300   absolute">
                                                                {store}
                                                            </p>
                                                            <div className="w-full group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full black left-0 top-[100%] absolute rounded-full"></div>
                                                            <p className="  translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300   absolute">
                                                                {store}
                                                            </p>
                                                        </button>
                                                    ))}

                                                    {item?.cities.length > 3 && (
                                                        <button
                                                            onClick={() => toggleShowAll(index)}
                                                            className="text-xs lg:text-base service_btn relative overflow-hidden group rounded-full border-2 border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                        >
                                                            <p className="     z-[99]">
                                                                {showAll ? "show less" : ` + ${item?.cities.length - 4} more`}
                                                            </p>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="w-full ">
                                                <button className='  group relative text-xs lg:text-base service_btn  w-full hover:bg-transparent bg-black hover:border-black border-transparent overflow-hidden hover:text-black transition-all duration-300 hover:  border-2 text-white py-2 lg:py-4 px-4 lg:px-8 uppercase  rounded-full flex items-center justify-between'>
                                                    <div className="w-full  group-hover:scale-110 origin-center group-hover:top-0 transition-all duration-300 h-full bg-[#FFFAF0] left-0 top-[100%] absolute rounded-full"></div>
                                                    <p className=' fixy1_5 '>Book Now</p>
                                                    <RiArrowRightUpLine size={24} className='z-[99]' />
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className=" w-full md:w-[40%]  h-full">
                                        <div
                                            className=" service_clip_img  w-full h-full overflow-hidden rounded-xl">
                                            <img className='w-full h-full object-cover' src={item.img} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ServicesSection