import ServiceBtn from '@/components/Buttons/ServiceBtn';
import { RiMapPinFill } from '@remixicon/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

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
        desc: "Premium garment care tailored for daily wear, delicate fabrics, and designer outfits. From washing and stain removal to fabric-specific cleaning and finishing, we ensure every piece stays fresh and refined.",
        cities: ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Kolkata"],
    },



];


const index = () => {

    const [showAllCities, setShowAllCities] = useState({});

    const toggleShowAll = (index) => {
        setShowAllCities((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    useEffect(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".service_paren",
                start: "top top",
                scrub: true,
                pin: true,
                end: "+=3000",
                // markers: true,
            }
        })

        tl.to(".slide_service", {
            translateY: "-300vh",
            duration: 3,
            ease: "none",
        }, "we")
        tl.to(".serv_img_3", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "none",
        }, "we")
        tl.to(".serv_img_2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            delay: 1,
            duration: 1,
            ease: "none",
        }, "we")
        tl.to(".serv_img_1", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            delay: 2,
            duration: 1,
            ease: "none",
        }, "we")

    }, [])


    return (
        <div>
            <div className=" service_paren  w-full h-screen  relative ">
                <div className="w-full slide_service">
                    {
                        services.map((item, index) => {
                            const showAll = showAllCities[index] || false;
                            const visibleCities = showAll ? item?.cities : item?.cities.slice(0, 4);
                            return (
                                <div key={index} className={`  h-[100vh]   w-full px-5 lg:px-10  overflow-hidden`}>
                                    <div className=" w-full mt-5 md:mt-0 md:w-[45%] p-5 lg:p-14 h-full flex flex-col justify-center">
                                        <p className='service_animate_txt_a  opacity-80 mb-5'>Our Services</p>

                                        <div className="w-full flex flex-col gap-[5vw] justify-center  ">
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
                                                        <button key={i} className=' text-sm lg:text-base learn_btn relative overflow-hidden group  text-white lg:text-black   bg-black lg:bg-transparent  rounded-full border-1 border-[#0e1111] px-0 py-2 lg:px-4 center lg:py-1.5'>
                                                            <p className='fixy1 font-normal opacity-0'>{store}</p>
                                                            <p className='lg:fixy1 group-hover:translate-y-[-10px] group-hover:opacity-0 transition-all duration-300 font-normal absolute'>{store} </p>
                                                            <div className="w-full origin-center group-hover:left-0 transition-all duration-300 h-full black top-0 left-[-100%] absolute "></div>
                                                            <p className='fixy1 font-normal translate-y-[10px] z-[99] text-white group-hover:translate-y-[0px] group-hover:opacity-100 opacity-0 transition-all duration-300  absolute'> {store}</p>
                                                        </button>
                                                    ))}

                                                    {item?.cities.length > 3 && (
                                                        <button
                                                            onClick={() => toggleShowAll(index)}
                                                            className="text-xs lg:text-base hover:bg-black/5  transition duration-300 service_btn relative overflow-hidden group rounded-full border border-[#0e1111] px-4 center   py-1 lg:py-1.5"
                                                        >
                                                            <p className="     z-[99]">
                                                                {showAll ? "show less" : ` + ${item?.cities.length - 4} more`}
                                                            </p>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="w-full ">
                                                <ServiceBtn />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="absolute z-[2] w-[40%] h-[75vh]  overflow-hidden rounded-xl top-1/2 right-24 -translate-y-1/2 ">
                    {
                        services.slice().reverse().map((item, index) => (
                            <div
                                style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
                                key={index} className={` serv_img_${index} absolute rounded-xl overflow-hidden w-full h-full top-0 left-0  `}>
                                <img src={item.img} alt={item.title} className='w-full rounded-xl h-full object-cover' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default index