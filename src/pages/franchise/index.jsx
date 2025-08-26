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
            <Responsibility />
            <FranchiseForm />
        </div>
    )
}

export default index