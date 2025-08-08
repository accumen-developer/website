import React from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { AboutUsSection } from './components/sections/AboutUsSection';
import { TechnologiesSection } from './components/sections/TechnologiesSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ITServicesSection } from './components/sections/ITServicesSection';
import { CompanyLogos } from './components/sections/CompanyLogos';
import { IntegrationsSection } from './components/sections/IntegrationsSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { MarketingSection } from './components/sections/MarketingSection';
import { PricingSection } from './components/sections/PricingSection';
import { FAQSection } from './components/sections/FAQSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';
import { FloatingElements } from './components/ui/FloatingElements';

function App() {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto box-border block tracking-[normal] leading-[normal] list-outside list-disc text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border">
        <div className="relative content-center items-center box-border gap-x-0 flex flex-col h-min justify-start min-h-[1000px] gap-y-0 overflow-hidden">
          <div className="absolute bg-[url('https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png')] bg-size-[128px] box-border inset-0"></div>
          <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <div className="static box-content shrink transform-none z-auto left-auto top-auto md:fixed md:aspect-auto md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-50.0%] md:z-[9] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-2/4 md:top-2.5">
              <Header />
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute bg-sky-50/90 box-border shrink-0 mix-blend-screen z-[1] overflow-hidden inset-0"></div>
          <div className="absolute aspect-[1.5425_/_1] box-border shrink-0 mix-blend-screen translate-x-[-449.397px] translate-y-[0.628833px] w-[900px] z-[1] left-2/4 top-[47px] md:translate-x-[-430.91px] md:translate-y-[19.9022px]">
            <div className="absolute box-border inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="aspect-[auto_617_/_400] box-border h-full object-cover w-full" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal opacity-100 transform-none w-auto z-auto right-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:mix-blend-screen md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:right-[-170px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[20.6934px] md:translate-y-[20.6934px] md:w-[900px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[849px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal opacity-100 transform-none w-auto z-auto right-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:mix-blend-screen md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:right-[-170px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[21.1403px] md:translate-y-[21.1403px] md:w-[900px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[658px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:left-[-390px] md:mix-blend-screen md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[30.8696px] md:w-[900px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[658px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:left-[-390px] md:mix-blend-screen md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[31.4712px] md:w-[900px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:top-[849px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:mix-blend-screen md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-424.981px] md:w-[900px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[20%] md:top-[1186px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>
          <div className="static box-content shrink mix-blend-normal opacity-100 transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:mix-blend-screen md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-533.065px] md:translate-y-[22.4349px] md:w-[1111px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[66%] md:top-[1078px]">
            <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
              <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
            </div>
          </div>

          <HeroSection />
          <AboutUsSection />
          <TechnologiesSection />
          <WhyChooseUsSection />
          <IndustriesSection />
          <ProductsSection />
          <ITServicesSection />
          {/* <IntegrationsSection />
          <InsightsSection />
          <MarketingSection />
          <PricingSection />
          <FAQSection />
          <TestimonialsSection /> */}
          <CTASection />
        </div>
        
        <Footer />
        <FloatingElements />
      </div>
    </div>
  );
}

export default App;
