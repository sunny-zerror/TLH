import React, { useEffect } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const FranchiseSection = () => {

    useEffect(() => {
        const ctx = gsap.context(() => {
            const split1 = new SplitText(".fr_anim_txt_b", { type: "words , chars" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top 30%",

                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            tl.fromTo(".fr_bg_img", { filter: " brightness(0.3)", }, { filter: " brightness(0.4)", duration: 0.5 })
            // tl.fromTo(".fr_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".fran_parent",
                    start: "top top",
                    pin: true,
                    scrub: true,
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })
            if (window.innerWidth <= 1024) {
                tl2.to(".fr_txt_box", {
                    top: "-20%",
                    duration: 180,
                    delay: 1
                }, "par")
            }else{
                tl2.to(".fr_txt_box", {
                    top: "-18vw",
                    duration: 180,
                    delay: 1
                }, "par")
            }

            tl2.fromTo(
                split1.chars,
                { opacity: 0.2 },
                {
                    opacity: 1,
                    stagger: { each: 0.3 },
                },
                "par"
            );



        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='fran_parent'>
            <div className=" relative w-full h-screen text-white overflow-hidden ">
                <img className=' fr_bg_img  absolute blur-none w-full h-full z-[-1] object-cover brightness-[.4]' src="/images/Hero swiper/pic_3.jpg" alt="" />
                <div className="absolute top-[20%] left-5 lg:top-[50%] lg:left-24 translate-y-[-50%] ">
                    <p className=' fr_anim_txt_a font-medium mb-5 opacity-80'>Become a Franchise</p>
                    <p className=' text-3xl leading-none lg:text-6xl fr_anim_txt_a'>Join the Leader <br /> in Garment Care</p>
                </div>
                <div className=" fr_txt_box w-full max-[768px]:left-5 lg:w-[40%] absolute top-[80%] lg:top-[40%]  lg:right-24">
                    <p className=' text-3xl leading-none  md:text-5xl font_light fr_anim_txt_b'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network, we provide our franchise partners with established SOPs, cutting-edge technology, and powerful marketing strategies. Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</p>
                </div>
            </div>
        </div>
    )
}

export default FranchiseSection