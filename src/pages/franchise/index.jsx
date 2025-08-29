import FranchiseForm from '@/components/sections/Franchise Page/FranchiseForm'
import FranchiseHero from '@/components/sections/Franchise Page/FranchiseHero'
import FranchiseNumbers from '@/components/sections/Franchise Page/FranchiseNumbers'
import Responsibility from '@/components/sections/Franchise Page/Responsibility'
import React from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from 'gsap/dist/SplitText';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const index = () => {

    return (
        <div>
            <FranchiseHero />
            <FranchiseNumbers />
            <div className="w-full px-5 lg:px-24 mt-10 md:mt-14 lg:mt-20 center">
                <div
                    className="w-full opacity-50 "
                    style={{ borderWidth: "1px", borderImage: "repeating-linear-gradient(to right, black 0, black 10px, transparent 10px, transparent 20px) 1" }}
                ></div>
            </div>
            <Responsibility />
            <FranchiseForm />
        </div>
    )
}

export default index