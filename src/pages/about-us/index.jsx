import FranchiseSection from '@/components/Home/FranchiseSection'
import AboutExcelleceSection from '@/components/sections/About Page/AboutExcelleceSection'
import AboutHeroSwiper from '@/components/sections/About Page/AboutHeroSwiper'
import AboutServices from '@/components/sections/About Page/AboutServices'
import WelcomeSection from '@/components/sections/About Page/WelcomeSection'
import React from 'react'

const index = () => {
  return (
    <div>
        <AboutHeroSwiper/>
        <WelcomeSection/>
        <AboutServices/>
        <AboutExcelleceSection/>
        <FranchiseSection/>
    </div>
  )
}

export default index