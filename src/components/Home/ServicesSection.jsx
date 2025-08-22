import { RiArrowRightUpLine, RiMapPinFill } from '@remixicon/react'
import React from 'react'

const ServicesSection = () => {
    return (
        <div>
            <div className="w-full h-[40vw] px-10">
                <div className="w-full h-full p-14 flex items-center justify-between bg-[#9494941f] rounded-xl">
                    <div className="w-[45%] h-full flex flex-col justify-between">
                        <p className=' font-medium mb-5 opacity-80'>Our Services</p>

                        <div className="w-full flex flex-col justify-between h-full ">
                            <div className="">
                                <p className='text-6xl  '>Garment Care</p>
                                <div className="w-full mt-2 border  border-dashed rounded-full border-black/30"></div>
                            </div>
                            <p>The Laundry House offers premium garment care services designed to preserve the quality, feel, and freshness of every piece. Whether it's daily wear, delicate fabrics, or designer outfits, we handle each garment with expert attention and care. Our services include professional washing, stain removal, fabric-specific cleaning, ironing, and finishing – all tailored to suit your clothing’s needs.</p>

                            <div className="stores">
                                <div className="flex  items-center gap-2">
                                    <RiMapPinFill size={18} className='translate-y-[-2px]' />
                                    <p className='text-sm uppercase font-semibold'>Locate Stores:</p>
                                    <p className='text-sm opacity-70'>Click the location below to explore</p>
                                </div>
                                <div className="w-full flex flex-wrap mt-4 gap-2 ">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <button className='px-4 py-2 text-sm  center border hover:bg-black/5 cursor-pointer transition duration-300 rounded-full '>
                                            <p className='fixy1'>City Name</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full ">
                                <button className='w-full text-white py-4 px-8 uppercase black rounded-full flex items-center justify-between'>
                                    <p className=' fixy1_5 '>Book Now</p>
                                    <RiArrowRightUpLine size={24} />
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="w-[40%]  h-full">
                        <div className="w-full h-full overflow-hidden rounded-xl">
                            <img className='w-full h-full object-cover' src="/images/Hero swiper/pic_2.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection