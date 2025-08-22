import ExcelleceSection from '@/components/Home/ExcelleceSection'
import FranchiseSection from '@/components/Home/FranchiseSection'
import HeroSwiper from '@/components/Home/HeroSwiper'
import AboutServices from '@/components/sections/About Page/AboutServices'
import WelcomeSection from '@/components/sections/About Page/WelcomeSection'
import React from 'react'

const index = () => {
  return (
    <div>
        <HeroSwiper/>
        <WelcomeSection/>
        <AboutServices/>
        <ExcelleceSection/>
        <FranchiseSection/>
    </div>
  )
}

export default index