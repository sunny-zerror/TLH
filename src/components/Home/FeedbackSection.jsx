import { RiStarFill } from '@remixicon/react'
import React from 'react'

const Reviews = [{
    name: "Ravi Gupta",
    img: "https://images.unsplash.com/photo-1722322426803-101270837197?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    rating: 5,
    comment: "TLH has genuinely excellent services. I no longer worry about stains on my clothes because I'm confident they will be removed. It is my preferred laundry place, and we've been very satisfied since they opened."
}, {
    name: "Sita Sharma",
    img: 'https://images.unsplash.com/photo-1731500573044-3551bfa73c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww',
    rating: 4,
    comment: "The service is good, but I think they could improve on delivery times. Overall, I'm happy with the results."
}, {
    name: "John Doe",
    img: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGUlMjBwaWNzfGVufDB8fDB8fHww",
    rating: 5,
    comment: "I had a great experience with TLH. The staff was friendly and the service was quick."
}]

const FeedbackSection = () => {
    return (
        <div>
            <div className="w-full  p-24">
                <div className="w-full center text-center">
                    <div className="">
                        <p className='text-6xl  '>What Our Customers Say</p>
                        <p className='text-xl'>Garment care for important people, by people who care.</p>
                    </div>
                </div>
                <div className="w-full mt-20 ">
                    <div className="w-full flex justify-between">
                        {
                            Reviews.map((review, index) => (
                                <div key={index} className="w-[30%]  p-5 flex flex-col relative gap-4">
                                    <div className="absolute h-[70%] top-[50%] translate-y-[-50%] left-0 w-[1.5px] opacity-20 black"></div>
                                    <div className="flex gap-2 items-center">
                                        <div className="size-12 bg-gray-100 overflow-hidden rounded-full">
                                            <img className='w-full h-full object-cover' src={review.img} alt={review.name} />
                                        </div>
                                        <div className="">
                                            <p className=' text-xl fixy1_5'>{review.name}</p>
                                            <div className="flex gap-0.5">
                                                {
                                                    Array.from({ length: review.rating }, (_, i) => (
                                                        <RiStarFill key={i} size={14} className='text-yellow-400' />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <p>{review.comment}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackSection