import React from 'react'

const Addresses = [{
    city: "Hyderabad",
    location: "Konda Pride, GF Shop 2, Jubilee Hills, Road No 1, Hyderabad - 500033"
}, {
    city: "Ahmedabad",
    location: "37-38, Riviera Arcade, 100 Feet Road, Nr. Prahladnagar Garden, Prahladhnagar Ahmadabad City, Ahmedabad 380015"
}, {
    city: "Bikaner",
    location: "Opposite To Synthesis Coaching Institute, Chanakya Nagar, Old Shivbadi Road, Bikaner - 334001"
}, {
    city: "Delhi",
    location: "A 454, Defence Colony Market, New Delhi - 110024"
}, {
    city: "Greater Noida",
    location: "A4 Shopping Complex,Sector Beta-2, Khora Gaon Dadri,Greater Noida , Uttar Pradesh 201309"
}, {
    city: "Gurugram",
    location: "The Laundry House Nearby M3M Badshahpur Gurgaon, Haryana 122001"
},
]

const StoresAddresses = () => {
    return (
        <div>
            <div className="w-full  p-24">
                <div className="flex justify-between">
                    <div className="">
                        <p className='text-6xl  '>Serving You Across India</p>
                        <p className='text-xl'>Find The Laundry House in 9 major cities and growing.</p>
                    </div>
                    <div className="flex items-end justify-end">
                        <p>(20 Stores)</p>
                    </div>
                </div>
                <div className="w-full mt-10">
                    <div className="w-full h-12 relative  flex items-center">
                        <div className="w-[25%] shrink-0">
                            <p className='text-sm opacity-60 uppercase'>CITY</p>
                        </div>
                        <div className="">
                            <p className='text-sm opacity-60 uppercase'>location</p>
                        </div>
                        <div className="absolute w-full h-[1px] rounded-full black opacity-80 bottom-0"></div>
                    </div>

                    {
                        Addresses.map((item, index) => (
                            <div key={index} className="w-full h-14 relative  flex items-center">
                                <div className="w-[25%] shrink-0">
                                    <p className='text-sm font-semibold  uppercase'>{item.city}</p>
                                </div>
                                <div className="">
                                    <p className='text-sm  uppercase'>{item.location}</p>
                                </div>
                                <div className="absolute w-full h-[1px] rounded-full black opacity-20  bottom-0"></div>
                            </div>
                        ))
                    }
                    <div className="w-full h-12 mt-10 bg-black/5 border border-black/50 center">
                        <p className='text-sm fixy1_5'>Load More</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoresAddresses