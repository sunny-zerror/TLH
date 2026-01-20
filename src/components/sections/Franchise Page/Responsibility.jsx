import React from 'react'

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const cardData = [
    {
        heading: "Your Investment",
        services: [
            {
                title: "Minimum space requirement:",
                description: "A spacious 2500 sq.ft. (carpet area) is essential."
            },
            {
                title: "Investment:",
                description: "A significant 2.5 Cr+ investment is required."
            },
            {
                title: "Electric Connection:",
                description: "3 Phase, 99KW."
            },
            {
                title: "Water Supply:",
                description: "Water storage capacity of 5-7K litres per day."
            },
            {
                title: "Local Licenses:",
                description: "All applicable local licenses must be obtained."
            }
        ]
    },
    {
        heading: "Our Contribution",
        services: [
            {
                title: "Support in search and finalisation of Store location",
            },
            {
                title: "Designing the Store with an expert Architect:",
            },
            {
                title: "Expert vendor for store construction",
            },
            {
                title: "Providing equipments and raw materials for operation",
            },
            {
                title: "Installing technical equipments",
            },
            {
                title: "Providing creative for store branding",
            },
            {
                title: "Store staff training",
            },
            {
                title: "Live training to partners and Staff at existing Store",
            },
            {
                title: "Equipment maintenance",
            },
            {
                title: "Replenishment of consumables",
            }
        ]
    }
]

const Responsibility = () => {
    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".resp_parent",
                    start: "top 60%",
                    // markers: true,
                    // toggleActions: "play none none reverse",
                }
            })
            // tl.fromTo(".resp_anim_txt",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            // tl.fromTo(".resp_card_txt",
            //     { y: 20, opacity: 0 },
            //     {
            //         y: 0,
            //         opacity: 1,
            //         delay: 1,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");
            // tl.from(".resp_card_line",

            //     {
            //         width: 0,
            //         delay: 1.2,
            //         duration: 0.5,
            //         stagger: 0.05,
            //     }, "parallel");

            tl.fromTo(
                ".resp_card",
                {
                    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                },
                {
                    delay: 0.2,
                    ease: "power2.inOut",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1,
                }, "parallel");

        });

        return () => ctx.revert();
    }, []);

    return (
        <div className='resp_parent'>
            <div className="w-full p-5 py-16 lg:p-20">
                <div className="w-full center">
                    <h1 className=" resp_anim_txt text-2xl lg:text-6xl  ">Sharing the Responsibilities</h1>
                </div>
                <div className="w-full mt-5 lg:mt-0 grid grid-cols-1 gap-y-10 lg:gap-y-0 md:grid-cols-2 gap-x-10 lg:gap-x-24  lg:p-20">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className=" resp_card p-5 lg:p-10 flex flex-col gap-5 lg:gap-10 bg-black/5 rounded-lg"
                        >
                            <div className="w-full center">
                                <h2 className=" resp_card_txt  text-xl lg:text-3xl">{card.heading}</h2>
                            </div>
                            {/* <div className="resp_card_line w-full  border-dashed border border-black/50 rounded-full"></div> */}
                            <div
                                className="w-full opacity-50 "
                                style={{ borderWidth: "1px", borderImage: "repeating-linear-gradient(to right, black 0, black 10px, transparent 10px, transparent 20px) 1" }}
                            ></div>
                            <div className="flex px-6 flex-col gap-3">
                                {card?.services.map((service, idx) => (
                                    <div key={idx}>
                                        <ul className="list-disc pl-4">
                                            <li>
                                                <h1 className="resp_card_txt text-sm lg:text-base">{service.title}</h1>
                                                {service.description && (
                                                    <p className="resp_card_txt text-sm lg:text-base">{service.description}</p>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Responsibility