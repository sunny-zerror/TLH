import { allStoresData } from '@/Data/allStoresData'
import { RiMapPinFill, RiPhoneFill, RiTimeFill } from '@remixicon/react';
import React, { useMemo, useState } from 'react'

const index = () => {

    const [activeCity, setactiveCity] = useState(allStoresData[0].cityName)
    const [categoryType, setcategoryType] = useState("Men's Wear")

    const uniqueCity = useMemo(() => {
        const allCity = allStoresData.flatMap(store => store.cityName);
        return [...new Set(allCity)];
    }, []);

    return (
        <div>
            <div className="w-full center flex-col pt-32">
                <p className='text-6xl'>Our Stores</p>
                <p className='text-xl'>Find a store near you to experience our services firsthand.</p>
            </div>
            <div className="tags w-full mt-16 px-24 h-10 border-b scroller_none border-black/20  flex items-center gap-10">
                {uniqueCity.map(city => (
                    <div key={city.id} onClick={() => setactiveCity(city)} className={`relative shrink-0 whitespace-nowrap h-full flex items-center cursor-pointer transition duration-300 ${activeCity === city ? " " : "text-black/40"}`}>
                        <p>{city}</p>
                        <div className={`absolute -bottom-[1.5px] z-[9] w-full bg-black rounded-full h-[2px] transition duration-300 ${activeCity === city ? "opacity-100" : "opacity-0"}`}></div>
                    </div>
                ))}
            </div>
            <div className="w-full  flex justify-between p-10 mb-20 ">
                <div data-lenis-prevent data className="w-[40%] h-[35vw] overflow-y-scroll scroller_none ">
                    {allStoresData.find(store => store.cityName === activeCity)?.shopNames?.map((shop, index) => (
                        <div
                            key={index}
                            className={`w-full  ${index === 0 ? "py-0 pb-4" : " py-4 pb-4"} flex flex-col gap-2 border-b border-black/20`}
                        >
                            <p className='text-2xl font-semibold'>{shop.name}</p>
                            <p className='text-sm opacity-70'>{shop.address}</p>
                            <div className="flex text-sm items-center gap-14">
                                <div className="flex items-center gap-1">
                                    <RiTimeFill size={16} />
                                    <p className='fixy1'>{shop.openTime}</p>
                                    <p className='fixy1'>-</p>
                                    <p className='fixy1'>{shop.closeTime}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <RiPhoneFill size={16} />
                                    <p className='fixy1'>{shop.contact}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <RiMapPinFill size={16} />
                                    <a
                                        href={shop.location}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fixy1 underline"
                                    >
                                        Get Direction
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="w-1/2 h-full flex flex-col gap-8">
                    <div className="w-full h-12 flex items-center px-20 justify-between rounded-full  border border-black/20 bg-black/5">
                        {allStoresData.find(store => store.cityName === activeCity)?.categories?.map((category, index) => (
                            <div key={index} onClick={() => setcategoryType(category.name)} className="h-full  relative w-fit cursor-pointer center">
                                <p className={` ${categoryType === category.name ? "opacity-100" : "opacity-50"} fixy1_5 transition duration-300`}>{category.name}</p>
                                <div className={` ${categoryType === category.name ? "opacity-100" : "opacity-0"}  absolute w-full h-[2px] black bottom-[-1.5px]  rounded-full transition duration-300`}></div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full relative overflow-hidden rounded-xl  border border-black/20 ">
                        <div className="w-[1.5px] h-full opacity-50 black absolute left-[33%]"></div>
                        <div className="w-[1.5px] h-full opacity-50 black absolute right-[33%]"></div>
                        <table className='w-full h-full'>
                            <thead className='w-full'>
                                <tr className='w-full flex h-12 bg-black/5 border-b-2 justify-between'>
                                    <th className='w-[33%] center h-10'>
                                        <p className='font-thin translate-y-[4px]'>
                                            Garments/Accessories
                                        </p>
                                    </th>
                                    <th className='w-[33%] center h-10 font_li'>
                                        <p className='font-thin translate-y-[4px]'>
                                            Premium Fabric Care Service
                                        </p>
                                    </th>
                                    <th className='w-[33%] center h-10'>
                                        <p className=' font-thin translate-y-[4px]' >
                                            Steam Iron Service
                                        </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                data-lenis-prevent
                                className="w-full "
                            >
                                {allStoresData
                                    .find((store) => store.cityName === activeCity)
                                    ?.categories.find((cat) => cat.name === categoryType)
                                    ?.servicePrices.map((service, index) => (
                                        <tr
                                            key={index}
                                            className={` ${index % 2 === 0 ? "bg-black/2 " : "bg-black/5"}  w-full flex justify-between  h-12 items-center `}
                                        >
                                            <td className="w-[32%] center">{service.serviceName}</td>
                                            <td className="w-[32%] center">₹ {service.premiumPrice}</td>
                                            <td className="w-[32%] center">₹ {service.steamPrice}</td>
                                        </tr>
                                    ))}
                            </tbody>

                        </table>
                    </div>
                    <div className="">
                        <p className='font-semibold opacity-70 text-sm'>* Please Note</p>
                        <p className='text-sm opacity-70 font_light'> • Designer and bridal apparel will be charged based on quality and specific requirements. </p>
                        <p className='text-sm opacity-70 font_light'> • Prices are exclusive of GST and are starting rates only.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default index