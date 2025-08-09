import React from 'react';
import { productsServicesItems } from '../../data/productsServices';
import { ProductsServicesCarousel } from './ProductsServicesCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductsServicesCarousel.css';

export function ProductsServicesSection() {
  return (
    <section id="products-services" className="relative content-center items-center bg-zinc-200 box-border gap-x-20 flex flex-col shrink-0 h-min justify-center max-w-[1200px] gap-y-20 w-full z-[1] overflow-hidden px-[18px] py-20 rounded-[20px] md:gap-x-8 md:gap-y-8 md:px-10 md:py-[100px]" data-aos="fade-up">
      <div className="relative content-center items-center box-border gap-x-11 flex flex-col shrink-0 h-min justify-start gap-y-11 w-full z-[3]" data-aos="fade-up">
        <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-screen-sm gap-y-4 w-full z-[3]" data-aos="fade-up">
          <div className="relative box-border shrink-0">
            <div className="relative content-center items-center bg-sky-50/90 shadow-[rgba(240,248,255,0.9)_0px_0px_0px_2px] box-border gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden px-3 py-0.5 rounded-[60px] after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-zinc-200 after:rounded-[60px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border shrink-0 h-[17px] opacity-80 w-[17px]">
                <div className="box-border contents">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-4.svg" alt="Icon" className="text-slate-900 box-border inline-block shrink-0 h-full w-full" />
                </div>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">Products & Services</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full" data-aos="fade-up">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Our Products & Services</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Discover our comprehensive range of products and IT enabled services.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full rounded-[30px]" data-aos="fade-up">
          <ProductsServicesCarousel items={productsServicesItems} />
        </div>
      </div>
    </section>
  );
}