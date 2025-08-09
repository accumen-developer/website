import React from 'react';
import { industryItems } from '../../data/industries';

export function IndustriesSection() {
  return (
    <section id="industries" className="relative content-center items-center bg-zinc-200 box-border gap-x-20 flex flex-col shrink-0 h-min justify-center gap-y-20 w-full z-[1] overflow-hidden py-20 rounded-[20px] md:gap-x-8 md:gap-y-8 md:py-[100px]" data-aos="fade-up">
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
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">Industries</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full" data-aos="fade-up">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Industries We Serve</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Our expertise spans across diverse industries, delivering tailored solutions to meet unique challenges.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative content-center items-center box-border gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden" data-aos="fade-up">
          <div className="relative box-border shrink-0 h-[88px] max-w-screen-xl w-full md:h-20" data-aos="fade-up">
            <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <section className="[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                <ul className="static [align-items:normal] box-content gap-x-[normal] block h-auto max-h-none max-w-none min-h-0 min-w-0 gap-y-[normal] transform-none w-auto pl-10 left-auto md:relative md:items-center md:aspect-auto md:box-border md:gap-x-[60px] md:flex md:h-full md:justify-items-center md:left-[-2170px] md:max-h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[60px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[3.3321px] md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                  {Array.from({ length: 16 }, (_, i) => {
                    const item = industryItems[i % industryItems.length];
                    return (
                      <li key={`scroll1-${i}`} className="box-content h-auto min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content shrink h-auto md:relative md:aspect-auto md:box-border md:shrink-0 md:h-12 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-zinc-200 md:box-border md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[228px]">
                            <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
          
          <div className="relative box-border shrink-0 h-[78px] max-w-screen-xl w-full md:h-20" data-aos="fade-up">
            <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <section className="[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                <ul className="static [align-items:normal] box-content gap-x-[normal] block h-auto max-h-none max-w-none min-h-0 min-w-0 gap-y-[normal] transform-none w-auto pl-10 md:relative md:items-center md:aspect-auto md:box-border md:gap-x-[60px] md:flex md:h-full md:justify-items-center md:max-h-full md:max-w-full md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-[60px] md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-x-[-3.3321px] md:w-full md:[mask-position:0%] md:bg-left-top md:pl-0 md:scroll-m-0 md:scroll-p-[auto]">
                  {Array.from({ length: 16 }, (_, i) => {
                    const item = industryItems[i % industryItems.length];
                    return (
                      <li key={`scroll2-${i}`} className="box-content h-auto min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content shrink h-auto md:relative md:aspect-auto md:box-border md:shrink-0 md:h-12 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-zinc-200 md:box-border md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[228px]">
                            <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                              <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{item.title}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}