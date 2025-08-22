import React from 'react'

const FranchiseSection = () => {
    return (
        <div>
            <div className=" relative w-full h-screen text-white overflow-hidden ">
                <img className='absolute w-full h-full z-[-1] object-cover brightness-[.4]' src="/images/Hero swiper/pic_3.jpg" alt="" />
                <div className="absolute top-[50%] left-24 translate-y-[-50%] ">
                    <p className=' font-medium mb-5 opacity-80'>Become a Franchise</p>
                    <p className='text-6xl  '>Join the Leader <br /> in Garment Care</p>
                </div>
                <div className="w-[40%] absolute top-[35%]  right-24">
                    <p className='text-5xl font_light'>The Laundry House offers a proven business model, comprehensive support, and the opportunity to be a part of India's garment care revolution. </p>
                </div>
            </div>
        </div>
    )
}

export default FranchiseSection