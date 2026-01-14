import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
gsap.registerPlugin(ScrollTrigger, SplitText);

const Addresses = [{
    city: "Hyderabad",
    img: "https://cdn-icons-png.freepik.com/512/11240/11240875.png?ga=GA1.1.1463716481.1742535023",
    location: "Konda Pride, GF Shop 2, Jubilee Hills, Road No 1, Hyderabad - 500033"
}, {
    city: "Ahmedabad",
    img: "https://cdn-icons-png.freepik.com/512/1821/1821143.png?ga=GA1.1.1463716481.1742535023",
    location: "37-38, Riviera Arcade, 100 Feet Road, Nr. Prahladnagar Garden, Prahladhnagar Ahmadabad City, Ahmedabad 380015"
}, {
    city: "Bikaner",
    img: "https://cdn-icons-png.freepik.com/512/809/809344.png?ga=GA1.1.1463716481.1742535023",
    location: "Opposite To Synthesis Coaching Institute, Chanakya Nagar, Old Shivbadi Road, Bikaner - 334001"
}, {
    city: "Delhi",
    img: "https://cdn-icons-png.freepik.com/512/15871/15871628.png?ga=GA1.1.1463716481.1742535023",
    location: "A 454, Defence Colony Market, New Delhi - 110024"
}, {
    city: "Greater Noida",
    img: "https://cdn-icons-png.freepik.com/512/15871/15871628.png?ga=GA1.1.1463716481.1742535023",
    location: "A4 Shopping Complex,Sector Beta-2, Khora Gaon Dadri,Greater Noida , Uttar Pradesh 201309"
}, {
    city: "Gurugram",
    img: "https://cdn-icons-png.freepik.com/512/7127/7127842.png?ga=GA1.1.1463716481.1742535023",
    location: "The Laundry House Nearby M3M Badshahpur Gurgaon, Haryana 122001"
},
]

const StoresData = [
  {
    store: "BSG Laundry Bar LLP",
    city: "Jaipur",
    storeType: "Live Store",
    model: "FOFO",
  },
  {
    store: "BSG Laundry Bar LLP (CC)",
    city: "Jaipur",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "Mahalaxmi Services",
    city: "Bikaner",
    storeType: "Live Store",
    model: "FOFO",
  },
  {
    store: "NDMC Greater Kailash",
    city: "New Delhi",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC Gurgaon 067",
    city: "Gurugram",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC Gurugram Sec 70",
    city: "Gurugram",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC Moti Bagh",
    city: "New Delhi",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC TLH CR Park",
    city: "New Delhi",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC TLH GGN Sec 15",
    city: "Gurugram",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "NDMC TLH Suncity 54",
    city: "Gurugram",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "The Clean Company",
    city: "Ahmedabad",
    storeType: "Live Store",
    model: "FOFO",
  },
  {
    store: "TLH Greater Noida",
    city: "Greater Noida",
    storeType: "Collection Centre",
    model: "FOFO",
  },
  {
    store: "TLH Surat",
    city: "Surat",
    storeType: "Live Store",
    model: "FOCO",
  },
  {
    store: "TLH Surat Citylight",
    city: "Surat",
    storeType: "Collection Centre",
    model: "FOCO",
  },
  {
    store: "TLH Tarrk Group",
    city: "Hyderabad",
    storeType: "Live Store",
    model: "FOFO",
  },
  {
    store: "TLH Vadodara",
    city: "Vadodara",
    storeType: "Live Store",
    model: "COCO",
  },
];


const StoresAddresses = () => {
    const storesRef = useRef(null);
    const [expandStores, setExpandStores] = useState(false)

    useEffect(() => {
        const el = storesRef.current;
        if (!el) return;

        if (expandStores) {
            gsap.to(el, {
                maxHeight: el.scrollHeight,
                duration: 0.5,
                ease: "expo.out",
            });
        } else {
            gsap.to(el, {
                maxHeight: 0,
                duration: 0.4,
                ease: "expo.inOut",
            });
        }
    }, [expandStores]);




    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".add_anim_parent",
                    start: "top 60%",
                    // markers: true,
                    toggleActions: "play none none reverse",
                }
            })

            // tl.fromTo(".add_anim_txt_a", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.05 });
            tl.fromTo(".add_anim_line", { width: 0 }, { width: "100%", duration: 0.5, stagger: 0.05 });
            // tl.fromTo(".add_anim_txt_btn", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.2, stagger: 0.05 });
        });

        return () => ctx.revert();
    }, []);


    return (
        <div className='add_anim_parent '>
            <div className="w-full py-16    p-5 lg:p-24">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="">
                        <h1 className=' text-2xl leading-none  lg:text-6xl add_anim_txt_a   '>Serving You Across India</h1>
                        <p className=' mt-1 text-sm   lg:text-xl add_anim_txt_a '>Find The Laundry House in 9 major cities and growing.</p>
                    </div>
                    {/* <div className=" hidden text-xs lg:text-base add_anim_txt_a  lg:flex items-end justify-end">
                        <p>(20 Stores)</p>
                    </div> */}
                </div>
                <div className="w-full grid gap-y-5 mt-10 grid-cols-3 lg:grid-cols-6">
                    {
                        Addresses.map((item, index) => (
                            <div key={index} className="w-full gap-y-5  aspect-square flex-col cursor-pointer group center text-center">
                                <img className='h-[40%]' src={item.img} alt="" />
                                <h1 className='  text-xs md:text-sm   uppercase'>{item.city}</h1>
                            </div>
                        ))
                    }
                </div>

                <div
                    ref={storesRef}
                    className="w-full all_stores_paren max-h-0 overflow-hidden mt-10"
                >
                    <div className="w-full h-12 relative  flex items-center">
                        <div className=" w-[35%] lg:w-[25%] shrink-0">
                            <p className=' add_anim_txt_a text-xs md:text-sm opacity-60 uppercase'>CITY</p>
                        </div>
                        <div className=" flex justify-between w-full">
                            <p className=' add_anim_txt_a text-xs md:text-sm opacity-60 uppercase'>Store name</p>
                            <div className=" text-xs lg:text-base add_anim_txt_a  flex items-end justify-end">
                                <p>({StoresData.length} Stores)</p>
                            </div>
                        </div>
                        <div className="  absolute w-full h-[1px] rounded-full black opacity-80 bottom-0"></div>
                    </div>

                    {
                        StoresData.map((item, index) => (
                            <div key={index} className="w-full cursor-pointer group py-3 lg:py-0 lg:h-14 relative  flex items-center">
                                <div className=" w-[35%] lg:w-[25%] shrink-0">
                                    <h1 className=' add_anim_txt_a text-xs md:text-sm   uppercase'>{item.city}</h1>
                                </div>
                                <div className="">
                                    <p className=' add_anim_txt_a text-xs md:text-sm  uppercase'>{item.store}</p>
                                </div>
                                <div className="group-hover:opacity-100 group-hover:h-[2px] transition-all duration-150  absolute add_anim_line w-full h-[1px] rounded-full black opacity-20  bottom-0"></div>
                            </div>
                        ))
                    }

                </div>

                <div onClick={() => setExpandStores(!expandStores)} className="w-full center mt-10 cursor-pointer">
                    <div className="w-full h-10 lg:h-12  bg-black/6 border border-black/50 center">
                        <h1 className=' text-xs font-thin lg:text-sm '>
                            {
                                expandStores ? "View less stores" : "View all stores"
                            }
                        </h1>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoresAddresses