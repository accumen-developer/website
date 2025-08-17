import React from 'react'
import { HeroSection } from '../sections/HeroSection'
import { AboutUsSection } from '../sections/AboutUsSection'
import { TechnologiesSection } from '../sections/TechnologiesSection'
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection'
import { ProductsSection } from '../sections/ProductsSection'
import { ITServicesSection } from '../sections/ITServicesSection'
import { IndustriesSection } from '../sections/IndustriesSection'
import { CTASection } from '../sections/CTASection'

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutUsSection />
            {/* <WhyChooseUsSection /> */}
            <TechnologiesSection />
            <ProductsSection />
            <ITServicesSection />
            {/* <IndustriesSection /> */}
            <CTASection />
        </div>
    )
}

export default Home