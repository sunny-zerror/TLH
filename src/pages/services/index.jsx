import { RiArrowRightUpLine } from '@remixicon/react';
import React, { useMemo } from 'react'

const Services = [
    {
        title: "Garment Care",
        desc: "Professional dry cleaning and wet cleaning for all your precious garments.",
        Tags: ["Dry Cleaning", "Wet Cleaning"],
    },
    {
        title: "Shoe & Bags",
        desc: "Premium cleaning and restoration services for shoes and bags.",
        Tags: ["Shoe Cleaning", "Bag Cleaning"],
    },
    {
        title: "Home & Auto Fabrics",
        desc: "Deep cleaning for sofas, curtains, and carpets including auto upholstery.",
        Tags: ["Sofa Cleaning", "Curtain Cleaning", "Carpet Cleaning"],
    },
    {
        title: "Wedding Couture",
        desc: "Specialized cleaning and finishing of wedding gowns and couture dresses.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
    },
    {
        title: "Laundry Essentials",
        desc: "Everyday laundry service with wet cleaning and steam ironing.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
    },
    {
        title: "Curtains & Drapes",
        desc: "On-site and off-site curtain cleaning to remove dust and pollutants.",
        Tags: ["Curtain Cleaning"],
    },
    {
        title: "Carpet & Rugs",
        desc: "Professional carpet and rug cleaning with stain removal and deodorizing.",
        Tags: ["Carpet Cleaning"],
    },
    {
        title: "Luxury Leather Bags",
        desc: "Restoration, polishing, and deep cleaning for luxury leather bags.",
        Tags: ["Bag Cleaning"],
    },
    {
        title: "Silk & Satin Wear",
        desc: "Gentle hand-finishing and dry cleaning for silk and satin fabrics.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
    },
    {
        title: "Blankets & Quilts",
        desc: "Cleaning for heavy bedding like blankets and quilts.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
    },
    {
        title: "Corporate Uniforms",
        desc: "Bulk dry cleaning and steam ironing services for office uniforms.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
    },
    {
        title: "Denim Care",
        desc: "Special treatment to preserve denim’s original look.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
    },
    {
        title: "Stain Removal Experts",
        desc: "Targeted stain removal for wine, oil, and ink stains.",
        Tags: ["Dry Cleaning", "Wet Cleaning"],
    },
    {
        title: "Sports Gear",
        desc: "Cleaning and deodorizing of sports shoes and gym bags.",
        Tags: ["Shoe Cleaning", "Bag Cleaning"],
    },
    {
        title: "Suit & Blazers",
        desc: "Dry cleaning and crisp steam ironing for formal suits and blazers.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
    },
    {
        title: "Kids Wear",
        desc: "Safe cleaning for children’s clothes with steam ironing.",
        Tags: ["Wet Cleaning", "Steam Ironing"],
    },
    {
        title: "Travel Essentials",
        desc: "Cleaning for travel bags, trolley covers, and backpacks.",
        Tags: ["Bag Cleaning"],
    },
    {
        title: "Vintage Care",
        desc: "Preservation and dry cleaning of vintage garments.",
        Tags: ["Dry Cleaning", "Steam Ironing"],
    },
    {
        title: "Outdoor Gear",
        desc: "Cleaning for camping tents, fabric bags, and sports shoes.",
        Tags: ["Bag Cleaning", "Shoe Cleaning"],
    },
    {
        title: "Office Furnishing",
        desc: "Cleaning for office sofas, carpets, and curtains.",
        Tags: ["Sofa Cleaning", "Carpet Cleaning", "Curtain Cleaning"],
    },
];

const index = () => {

    const uniqueTags = useMemo(() => {
        const allTags = Services.flatMap(service => service.Tags);
        return ["All", ...new Set(allTags)];
    }, []);

    return (
        <div>
            <div className="w-full center flex-col pt-32">
                <p className='text-6xl'>Our Services</p>
                <p className='text-xl'>Explore the range of services we offer to care for your garments.</p>
            </div>
            <div className="tags w-full mt-16 px-24 h-10 border-b scroller_none border-black/20  flex items-center justify-between">
                {uniqueTags.map(tag => (
                    <div key={tag} className="relative shrink-0 whitespace-nowrap h-full flex items-center cursor-pointer">
                        <p>{tag}</p>
                        {
                            tag==="All" && (
                                <div className="absolute -bottom-[1.5px] z-[9] w-full bg-black rounded-full h-[2px]"></div>
                            )
                        }
                    </div>
                ))}
            </div>
            <div className="w-full mb-20  flex justify-between gap-10 p-10 ">
                <div className="w-[25%] h-[75vh] flex flex-col justify-between gap-5">
                    <div className="w-full h-[70%] ">
                        <img className=' w-full h-full object-cover' src="/images/services/1_Garment Care.jpg" alt="" />
                    </div>
                    <div className="w-full h-[30%] flex flex-col  justify-between ">
                        <p className='text-3xl '>Shoe & Bags</p>
                        <p>Professional dry cleaning and wet cleaning for all your precious garments</p>
                        <div className="">

                            <button className=' flex gap-2  uppercase px-4 py-2 bg-black/5 rounded-full'>
                                <p className='text-base fixy1_5'>Book Now</p>
                                <RiArrowRightUpLine size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-[75vh] flex flex-col justify-between gap-5">
                    <div className="w-full h-[70%] ">
                        <img className=' w-full h-full object-cover' src="/images/services/2_Shoe & Bags.jpg" alt="" />
                    </div>
                    <div className="w-full h-[30%] flex flex-col  justify-between ">
                        <p className='text-3xl '>Home & Auto Fabrics</p>
                        <p>Professional dry cleaning and wet cleaning for all your precious garments</p>
                        <div className="">

                            <button className=' flex gap-2  uppercase px-4 py-2 bg-black/5 rounded-full'>
                                <p className='text-base fixy1_5'>Book Now</p>
                                <RiArrowRightUpLine size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-[75vh] flex flex-col justify-between gap-5">
                    <div className="w-full h-[70%] ">
                        <img className=' w-full h-full object-cover' src="/images/services/3_Home & Auto Fabrics.jpg" alt="" />
                    </div>
                    <div className="w-full h-[30%] flex flex-col  justify-between ">
                        <p className='text-3xl '>Wedding Couture</p>
                        <p>Professional dry cleaning and wet cleaning for all your precious garments</p>
                        <div className="">

                            <button className=' flex gap-2  uppercase px-4 py-2 bg-black/5 rounded-full'>
                                <p className='text-base fixy1_5'>Book Now</p>
                                <RiArrowRightUpLine size={24} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[25%] h-[75vh] flex flex-col justify-between gap-5">
                    <div className="w-full h-[70%] ">
                        <img className=' w-full h-full object-cover' src="/images/services/4_Wedding Couturer.jpg" alt="" />
                    </div>
                    <div className="w-full h-[30%] flex flex-col  justify-between ">
                        <p className='text-3xl '>Garment Care</p>
                        <p>Professional dry cleaning and wet cleaning for all your precious garments</p>
                        <div className="">

                            <button className=' flex gap-2  uppercase px-4 py-2 bg-black/5 rounded-full'>
                                <p className='text-base fixy1_5'>Book Now</p>
                                <RiArrowRightUpLine size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index