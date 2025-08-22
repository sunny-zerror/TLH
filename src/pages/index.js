import AboutSection from '@/components/Home/AboutSection'
import ExcelleceSection from '@/components/Home/ExcelleceSection'
import FeedbackSection from '@/components/Home/FeedbackSection'
import FranchiseSection from '@/components/Home/FranchiseSection'
import HeroSwiper from '@/components/Home/HeroSwiper'
import ServicesSection from '@/components/Home/ServicesSection'
import StoresAddresses from '@/components/Home/StoresAddresses'
import React from 'react'

const index = () => {
  return (
    <>
    <HeroSwiper/>
    <AboutSection/>
    <ServicesSection/>
    <ExcelleceSection/>
    <div className="w-full center px-10">
      <div className="w-full bg-black h-[1px]"></div>
    </div>
    <StoresAddresses/>
    <FranchiseSection/>
    <FeedbackSection/>
    </>
  )
}

export default index