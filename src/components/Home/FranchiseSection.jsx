import React, { useEffect, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { RiArrowRightUpLine } from '@remixicon/react';
import ArrowButton from '../Buttons/ArrowButton';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseSection = () => {

    // useEffect(() => {
    //     const ctx = gsap.context(() => {
    //         if (window.innerWidth < 1024) return
    //         const split1 = new SplitText(".fr_anim_txt_b", { type: "words , chars" });

    //         // const tl = gsap.timeline({
    //         //     scrollTrigger: {
    //         //         trigger: ".fran_parent",
    //         //         start: "top 30%",

    //         //         // markers: true,
    //         //         toggleActions: "play none none reverse",
    //         //     }
    //         // })
    //         // tl.fromTo(".fr_bg_img", { filter: " brightness(0.3)", }, { filter: " brightness(0.4)", duration: 0.5 })
    //         // tl.fromTo(".fr_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
    //         const tl2 = gsap.timeline({
    //             scrollTrigger: {
    //                 trigger: ".fran_parent",
    //                 start: "top top",
    //                 end: "bottom top",
    //                 pin: true,
    //                 anticipatePin: 1,
    //                 scrub: true,
    //                 // markers: true,
    //                 // toggleActions: "play none none reverse",
    //             }
    //         })
    //         tl2.to(".fr_txt_box", {
    //             top: "-20vw",
    //             duration: 180,
    //             delay: 1
    //         }, "par")
    //         tl2.fromTo(
    //             split1.chars,
    //             { opacity: 0.2 },
    //             {
    //                 opacity: 1,
    //                 stagger: { each: 0.3 },
    //             },
    //             "par"
    //         );



    //     });

    //     return () => ctx.revert();
    // }, []);

    // const [expanded, setExpanded] = useState(false);

    return (
        <div className='fran_parent'>
            <div className=" relative w-full h-screen flex  items-center text-white overflow-hidden ">
                <img className=' fr_bg_img  absolute blur-none w-full h-full z-[-1] object-cover brightness-[.4]' src="/images/Hero swiper/pic_3.webp" alt="" />
                <div className=" p-5 lg:p-24 space-y-10">
                    <div className="">
                        <h2 className='  text-sm lg:text-6xl mb-2 opacity-80'>Become a Franchise Partner</h2>
                        <p className=' text-2xl leading-none lg:text-lg fr_anim_txt_a '>Proven SOPs, training, tech + marketing support to launch TLH in your city.</p>
                    </div>
                    <div className="">

                        <h5
                            className={` text-sm  md:text-xl lg:text-3xl transition-all duration-300 `}>
                            • Training + operating SOPs
                            <br />
                           • Quality standards + audits
                            <br />
                           • Launch marketing support
                        </h5>
                    </div>
                    <div className=" max-sm:-ml-3 w-1/2 lg:w-[25%] whitespace-nowrap scale-[.85] lg:scale-100 ">
                        <ArrowButton variant="light" label="Enquire Now" href="/franchise" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseSection