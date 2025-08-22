import React from 'react'

const AboutSection = () => {
  return (
    <div>
      <div className="w-full h-[70vh]  flex items-center  justify-between p-24">
        <div className="w-[40%] ">
          <p className=' font-medium mb-5 opacity-80'>About Us</p>
          <p className='text-6xl  '>India's Fastest Growing Garment Care Service</p>
        </div>
        <div className="w-1/2 ">
          <p>Founded in 2016, TLH is India's fastest-growing, reliable garment care service.
            We are not just a laundry; we are garment care experts dedicated to preserving
            the life and beauty of your most cherished items. We combine state-of-the-art technology with eco-friendly practices to deliver a service that is as kind to your clothes as it is to the planet.</p> <br />
          <p>Our pioneering "Live Laundry Studios" offer complete transparency, allowing
            you to witness the meticulous care your garments receive</p> <br />
          <button className='rounded-full border-2 border-[#0e1111] px-6 center font-bold py-2'>
            <p className='fixy1 font_light'>Learn More About Our Process</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutSection