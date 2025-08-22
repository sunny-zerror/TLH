import { RiArrowRightUpLine } from '@remixicon/react'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const links = [{
  title: "About Us",
  url: "/about-us"
}, {
  title: "Services",
  url: "/services"
}, {
  title: "Stores",
  url: "/stores"
}, {
  title: "Franchise",
  url: "/franchise"
}, {
  title: "Care guides",
  url: "/care-guides"
}, {
  title: "Contact",
  url: "/contact"
}]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/services" || router.pathname === "/stores" || router.pathname === "/franchise" || router.pathname === "/404") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  return (
    <div>
      <div
        className={`w-full fixed h-16 z-[99] flex items-center justify-between px-10 
          transition-colors duration-500 ease-in-out 
          ${isScrolled ? "black text-white" : "bg-transparent text-white"}`}
      >
        <div className="w-[20%]">
          <a href="/">
            <img className='w-[15vw]' src="/logos/Logo_White.svg" alt="" />
          </a>
        </div>
        <div className="flex items-center gap-8">
          {
            links.map(link => (
              <a key={link.title} href={link.url}>
                <p className='text-base   '>
                  {link.title}
                </p>
              </a>
            ))
          }
        </div>
        <div className="flex items-center  justify-end  w-[20%]">
          <button className=' flex gap-2  uppercase px-4 py-2 rounded-full'>
            <p className='text-base fixy1_5'>Book Now</p>
            <RiArrowRightUpLine size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header