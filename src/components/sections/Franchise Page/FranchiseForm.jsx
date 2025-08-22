import { RiArrowRightUpLine } from '@remixicon/react'
import React from 'react'

const FranchiseForm = () => {
    return (
        <div>
            <div className="w-full  px-44 mb-20 ">
                <div className="w-full h-full  p-20 bg-black/5 justify-between rounded-xl flex">
                    <div className="w-1/2 h-full flex gap-5 flex-col ">
                        <p className='text-6xl'>Let’s work <br /> together</p>
                        <p className='text-xl w-[70%] '>Fill the form and we will contact you shortly or reach out to us at</p>
                        <p className='font-semibold'>info@tlhindia.in</p>
                    </div>
                    <div className="w-1/2 h-full">
                        <form action="">
                            <div className="w-full ">
                                <input className='outline-none w-full text-xl mb-2' type="text" placeholder='Full Name' name="" id="" />
                                <div className="w-full h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-7 ">
                                <input className='outline-none w-full text-xl mb-2' type="text" placeholder='Phone Number' name="" id="" />
                                <div className="w-full h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-7">
                                <input className='outline-none w-full text-xl mb-2' type="text" placeholder='Your City of Interest for the Franchise' name="" id="" />
                                <div className="w-full h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <div className="w-full mt-7 ">
                                <textarea data-lenis-prevent className='outline-none w-full text-xl mb-2 h-24 resize-none scroller_none leading-none overflow-y-scroll' type="text" placeholder='Your Message' name="" id="" />
                                <div className="w-full h-[1.5px] opacity-70 black rounded-full"></div>
                            </div>
                            <button className=' text-white py-2 px-4 uppercase black rounded-full center gap-2 mt-10'>
                                <p className=' fixy1_5 '>Submit</p>
                                <RiArrowRightUpLine size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FranchiseForm