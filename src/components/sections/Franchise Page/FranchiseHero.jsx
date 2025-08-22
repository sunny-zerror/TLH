import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const FranchiseHero = () => {
    return (
        <div>
            <div className="w-full relative h-screen text-white">
                <img className='w-full h-full object-cover brightness-[.3]' src="/images/Hero swiper/pic_3.jpg" alt="" />
                <div className="absolute w-[70%] flex flex-col gap-5 items-center top-[50%] left-[50%] text-center translate-y-[-50%] translate-x-[-50%]">
                    <p className=' text-xl'>Become a Franchise</p>
                    <p className='text-6xl'>Join the Leader in Garment Care</p>
                    <p className='text-sm w-[70%]'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a
                        part of India's garment care revolution. With over 60,000 satisfied customers and a rapidly expanding network,
                        we provide our franchise partners with established SOPs, cutting-edge technology, and powerful
                        marketing strategies.</p>
                    <p className='text-sm w-[70%] '>Partner with us and bring a new level of trust and transparency to the cleaning industry in your city.</p>
                    <button className='bg-white center mt-5 text-black w-[30%] rounded-full py-2 px-4 '>
                        <p className='text-base fixy1_5 uppercase font-semibold '>Join Now</p>
                        <RiArrowRightUpLine size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FranchiseHero