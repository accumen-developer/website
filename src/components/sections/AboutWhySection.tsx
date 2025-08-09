import React from 'react';
import { AboutUsSection } from './AboutUsSection';
import { WhyChooseUsSection } from './WhyChooseUsSection';

export function AboutWhySection() {
  return (
    <section id="about-why" className="relative content-center items-center box-border gap-x-20 flex flex-col shrink-0 h-min justify-center gap-y-20 w-full z-[1] overflow-hidden pt-[120px] pb-20 px-[18px] md:gap-x-8 md:gap-y-8 md:pt-40 md:pb-[100px] md:px-10" data-aos="fade-up">
      <div className="relative content-center items-center box-border gap-x-[30px] flex flex-col shrink-0 h-min justify-start max-w-[1200px] gap-y-[30px] w-full z-[3]" data-aos="fade-up">
        <div className="relative content-center items-center box-border gap-x-6 flex flex-col shrink-0 h-min justify-start max-w-[1000px] gap-y-6 w-full z-[3]" data-aos="fade-up">
          <div className="relative content-center items-center bg-slate-50 shadow-[rgba(141,194,235,0.25)_0px_-3px_0px_2px_inset,rgba(16,49,77,0.21)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.2)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.2)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.18)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] box-border gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min z-[2] p-2.5 rounded-2xl">
            <div className="relative content-center items-center bg-slate-900 shadow-[rgba(16,49,77,0.24)_0px_0.706592px_0.706592px_-0.666667px,rgba(16,49,77,0.23)_0px_1.80656px_1.80656px_-1.33333px,rgba(16,49,77,0.22)_0px_3.62176px_3.62176px_-2px,rgba(16,49,77,0.2)_0px_6.8656px_6.8656px_-2.66667px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-3.33333px,rgba(16,49,77,0.06)_0px_30px_30px_-4px] box-border gap-x-2.5 flex shrink-0 h-min justify-center gap-y-2.5 w-min p-4 rounded-[10px]">
              <div className="relative aspect-square box-border shrink-0 w-8 md:w-11">
                <div className="absolute box-border inset-0">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/Vw4SxE2qkEuKYpt0YYdU2kV6Irg.png" alt="logo" className="aspect-[auto_64_/_64] box-border h-full object-contain w-full" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative content-center items-center box-border gap-x-6 flex flex-col shrink-0 h-min justify-center gap-y-6 w-full" data-aos="fade-up">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-[40px] box-border tracking-[-0.4px] leading-[48px] break-words text-center font-plus_jakarta_sans md:text-7xl md:tracking-[-0.72px] md:leading-[86.4px]">
                <span className="text-[40px] box-border inline-block tracking-[-0.4px] leading-[48px] break-words md:text-7xl md:tracking-[-0.72px] md:leading-[86.4px]">About Us & Why Choose Us</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col md:flex-row shrink-0 justify-start max-w-screen-xl break-words w-full gap-8" data-aos="fade-up">
              <div className="w-full md:w-1/2">
                <AboutUsSection />
              </div>
              <div className="w-full md:w-1/2">
                <WhyChooseUsSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}