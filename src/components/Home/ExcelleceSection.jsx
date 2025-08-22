import React from 'react'


const excellenceData = [{
    img: "/logos/atom.svg",
    title: "Advanced Technology",
    para: "State-of-the-art equipment and eco-friendly processes for superior results"
}, {
    img: "/logos/support.svg",
    title: "Expert Care",
    para: "Professional dry cleaning and wet cleaning for all your precious garments"
}, {
    img: "/logos/star.svg",
    title: "Premium Quality",
    para: "Guaranteed satisfaction with insured garment protection"
}]

const ExcelleceSection = () => {
    return (
        <div>
            <div className="w-full py-24 center">
                <div className="w-full  flex flex-col items-center justify-center gap-20">
                    <div className="w-full text-center">
                        <div className='text-6xl uppercase font-semibold'>
                            <p>Excellence</p>
                            <p>in Every Detail</p>
                        </div>
                        <p  className='text-xl'>State-of-the-art equipment and eco-friendly processes for superior results</p>
                    </div>
                    <div className="w-full   flex items-center justify-center gap-10">
                        {excellenceData.map((item, index) => (
                            <div className="h-full w-[20%] gap-5 flex flex-col text-center items-center justify-between">
                                <p className='text-xl font-semibold'>{item.title}</p>
                                <div className="w-full h-[1px] black"></div>
                                <p>{item.para}</p>
                                <div className="w-full center">
                                    <img className='size-14' src={item.img} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExcelleceSection