import FranchiseForm from '@/components/sections/Franchise Page/FranchiseForm'
import FranchiseHero from '@/components/sections/Franchise Page/FranchiseHero'
import FranchiseNumbers from '@/components/sections/Franchise Page/FranchiseNumbers'
import Responsibility from '@/components/sections/Franchise Page/Responsibility'
import React from 'react'

const index = () => {
    return (
        <div>
            <FranchiseHero />
            <FranchiseNumbers/>
            <div className="w-full center">
                <div className="w-[70%] rounded-full h-[2px] black"></div>
            </div>
            <Responsibility/>
            <FranchiseForm/>
        </div>
    )
}

export default index