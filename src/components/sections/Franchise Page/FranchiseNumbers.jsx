import React from 'react'

const Data = [
    {
        title: "Projected CAGR through 2026",
        value: "5"
    }, {
        title: "Expected Value of the Laundry Market",
        value: "$1.2",
        extra: "Tn"
    }, {
        title: "Unique Customers Served by TLH TILL Date",
        value: "4.5",
        extra: "K+"
    }, {
        title: "Laundry Cared for by TLH Daily",
        value: "4",
        extra: "Ton+"
    }, {
        title: "Cities",
        value: "9",
    }, {
        title: "stores",
        value: "22",
        extra: "+"
    },
]

const FranchiseNumbers = () => {
    return (
        <div>
            <div className="w-full  grid grid-cols-3 p-24 gap-y-16">
                {
                    Data.map((item, index) => (
                        <div className="w-[75%] " key={index}>
                            <p className=' text-sm uppercase'>{item.title}</p>
                            <div className="w-full h-[1.5px] black rounded-full mt-2 mb-8"></div>
                            <div className="flex items-end gap-2">
                                <p className='text-7xl'>{item.value}</p>
                                <p className='text-4xl translate-y-[-6.5px]'>{item.extra}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FranchiseNumbers