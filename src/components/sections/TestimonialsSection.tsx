import React from 'react';
import { testimonials } from '../../data/testimonials';

export function TestimonialsSection() {
  return (
    <section className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full overflow-hidden px-[18px] py-20 rounded-[20px] md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border gap-x-11 flex flex-col shrink-0 h-min justify-start max-w-[1200px] gap-y-11 w-full z-[3]">
        <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-screen-sm gap-y-4 w-full z-[3]">
          <div className="relative box-border shrink-0">
            <div className="relative content-center items-center bg-sky-50/90 shadow-[rgba(240,248,255,0.9)_0px_0px_0px_2px] box-border gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden px-3 py-0.5 rounded-[60px] after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-zinc-200 after:rounded-[60px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border shrink-0 h-[17px] opacity-80 w-[17px]">
                <div className="box-border contents">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-35.svg" alt="Icon" className="text-slate-900 box-border inline-block shrink-0 h-full w-full" />
                </div>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">Trusted by Innovators Worldwide</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">What</span>
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Our</span>
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Users</span>
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Say</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Hear</span>
                <span className="box-border inline-block break-words">from</span>
                <span className="box-border inline-block break-words">businesses</span>
                <span className="box-border inline-block break-words">who've</span>
                <span className="box-border inline-block break-words">transformed</span>
                <span className="box-border inline-block break-words">their</span>
                <span className="box-border inline-block break-words">workflows</span>
                <span className="box-border inline-block break-words">with</span>
                <span className="box-border inline-block break-words">our</span>
                <span className="box-border inline-block break-words">solutions</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-start gap-y-8 w-full">
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content basis-auto grow-0 shrink min-h-0 min-w-0 w-auto z-auto md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-start md:items-start md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.055)_0px_0.706592px_0.706592px_-0.291667px,rgba(16,49,77,0.055)_0px_1.80656px_1.80656px_-0.583333px,rgba(16,49,77,0.06)_0px_3.62176px_3.62176px_-0.875px,rgba(16,49,77,0.063)_0px_6.8656px_6.8656px_-1.16667px,rgba(16,49,77,0.075)_0px_13.6468px_13.6468px_-1.45833px,rgba(16,49,77,0.098)_0px_30px_30px_-1.75px] md:box-border md:gap-x-5 md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                    <div className="static [align-items:normal] box-content gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
                      <div className="static [align-items:normal] box-content gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.content}</p>
                        </div>
                      </div>
                      <div className="static [align-items:normal] box-content gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-3.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static shadow-none box-content shrink h-auto min-h-0 min-w-0 rounded-none md:relative md:aspect-square md:shadow-[rgba(16,49,77,0.208)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.204)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.196)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.184)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.157)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] md:box-border md:shrink-0 md:h-10 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]">
                          <div className="static box-content rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%] md:inset-0">
                            <img 
                              sizes="40px" 
                              src={testimonial.avatar} 
                              alt="user pic" 
                              className={testimonial.avatarClassName} 
                            />
                          </div>
                        </div>
                        <div className="static self-auto box-content shrink min-h-0 min-w-0 w-auto md:relative md:self-stretch md:aspect-auto md:box-border md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-slate-500/50 after:md:border-separate after:md:border-[3px] after:md:border-dotted after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
                        <div className="static [align-items:normal] box-content gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-0 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.author}</p>
                          </div>
                          <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-slate-900 md:text-sm md:aspect-auto md:box-border md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {testimonials.slice(3, 6).map((testimonial) => (
              <div key={testimonial.id} className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content basis-auto grow-0 shrink min-h-0 min-w-0 w-auto z-auto md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-start md:items-start md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.055)_0px_0.706592px_0.706592px_-0.291667px,rgba(16,49,77,0.055)_0px_1.80656px_1.80656px_-0.583333px,rgba(16,49,77,0.06)_0px_3.62176px_3.62176px_-0.875px,rgba(16,49,77,0.063)_0px_6.8656px_6.8656px_-1.16667px,rgba(16,49,77,0.075)_0px_13.6468px_13.6468px_-1.45833px,rgba(16,49,77,0.098)_0px_30px_30px_-1.75px] md:box-border md:gap-x-5 md:flex md:flex-col md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                    <div className="static [align-items:normal] box-content gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto z-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:z-[2] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]">
                      <div className="static [align-items:normal] box-content gap-x-[normal] block flex-row shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:gap-x-2.5 md:flex md:flex-col md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.content}</p>
                        </div>
                      </div>
                      <div className="static [align-items:normal] box-content gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-3.5 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-3.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <div className="static shadow-none box-content shrink h-auto min-h-0 min-w-0 rounded-none md:relative md:aspect-square md:shadow-[rgba(16,49,77,0.208)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.204)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.196)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.184)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.157)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] md:box-border md:shrink-0 md:h-10 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]">
                          <div className="static box-content rounded-none inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%] md:inset-0">
                            <img 
                              sizes="40px" 
                              src={testimonial.avatar} 
                              alt="user pic" 
                              className={testimonial.avatarClassName} 
                            />
                          </div>
                        </div>
                        <div className="static self-auto box-content shrink min-h-0 min-w-0 w-auto md:relative md:self-stretch md:aspect-auto md:box-border md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-0.5 md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-slate-500/50 after:md:border-separate after:md:border-[3px] after:md:border-dotted after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
                        <div className="static [align-items:normal] box-content gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-center md:items-center md:aspect-auto md:box-border md:gap-x-0 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-0 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.author}</p>
                          </div>
                          <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 break-normal font-times md:text-slate-900 md:text-sm md:aspect-auto md:box-border md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative content-center items-center box-border gap-x-2 flex flex-col shrink-0 h-min justify-center gap-y-2 w-full md:flex-row">
          <div className="relative content-center items-center box-border gap-x-6 flex shrink-0 h-min justify-center gap-y-6 w-min pr-0 md:pr-[22px]">
            <div className="relative box-border shrink-0 h-7 w-px">
              <div className="absolute aspect-square shadow-[rgba(255,255,255,0.9)_0px_0px_0px_2px,rgba(16,49,77,0.21)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.2)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.2)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.18)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] box-border shrink-0 translate-x-[-50.0%] translate-y-[-50.0%] w-7 z-[1] overflow-hidden rounded-[1000px] left-full top-2/4">
                <div className="absolute box-border rounded-[1000px] inset-0">
                  <img sizes="28px" src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/ETgoVdeITLLIYCHTFNeVuZDMyQY.png" alt="user pic" className="aspect-[auto_1024_/_1024] box-border h-full object-cover w-full rounded-[1000px]" />
                </div>
              </div>
            </div>
            <div className="relative box-border shrink-0 h-7 w-px">
              <div className="absolute aspect-square shadow-[rgba(255,255,255,0.9)_0px_0px_0px_2px,rgba(16,49,77,0.21)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.2)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.2)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.18)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] box-border shrink-0 left-[-13px] z-[1] overflow-hidden rounded-[1000px] -right-3.5 top-0">
                <div className="absolute box-border rounded-[1000px] inset-0">
                  <img sizes="28px" src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/bnJJiW5Vfixlrz7M2pzoeyHBU.png" alt="user pic" className="aspect-[auto_2048_/_2048] box-border h-full w-full rounded-[1000px]" />
                </div>
              </div>
            </div>
            <div className="relative box-border shrink-0 h-7 w-px">
              <div className="absolute aspect-square shadow-[rgba(255,255,255,0.9)_0px_0px_0px_2px,rgba(16,49,77,0.21)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.2)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.2)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.18)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] box-border shrink-0 left-[-13px] z-[1] overflow-hidden rounded-[1000px] -right-3.5 top-0">
                <div className="absolute box-border rounded-[1000px] inset-0">
                  <img sizes="28px" src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/rlizSNVuxrrqd6I5hGaSxwqn0Os.png" alt="user pic" className="aspect-[auto_1024_/_1024] box-border h-full object-cover w-full rounded-[1000px]" />
                </div>
              </div>
            </div>
            <div className="relative box-border shrink-0 h-7 w-px">
              <div className="absolute aspect-square shadow-[rgba(255,255,255,0.9)_0px_0px_0px_2px,rgba(16,49,77,0.21)_0px_0.706592px_0.706592px_-0.583333px,rgba(16,49,77,0.2)_0px_1.80656px_1.80656px_-1.16667px,rgba(16,49,77,0.2)_0px_3.62176px_3.62176px_-1.75px,rgba(16,49,77,0.18)_0px_6.8656px_6.8656px_-2.33333px,rgba(16,49,77,0.16)_0px_13.6468px_13.6468px_-2.91667px,rgba(16,49,77,0.09)_0px_30px_30px_-3.5px] box-border shrink-0 left-[-13px] z-[1] overflow-hidden rounded-[1000px] -right-3.5 top-0">
                <div className="absolute box-border rounded-[1000px] inset-0">
                  <img sizes="28px" src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/X0pqhTmlK8gdYqPbljhuLXlyd0I.png" alt="user pic" className="aspect-[auto_1024_/_1024] box-border h-full object-cover w-full rounded-[1000px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-1 flex shrink-0 h-min justify-center gap-y-1 w-min overflow-hidden">
            <div className="relative box-border flex flex-col shrink-0 justify-start opacity-80 text-nowrap">
              <p className="text-slate-900 text-base box-border leading-6 text-center text-nowrap font-inter">Trusted by</p>
            </div>
            <div className="relative content-center items-center box-border gap-x-0.5 flex shrink-0 h-6 justify-center gap-y-0.5 w-min overflow-hidden">
              <div className="relative box-border shrink-0">
                <span className="text-slate-900 text-sm box-border leading-[23.8px] font-inter">5,000</span>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">+</p>
              </div>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start opacity-80 text-nowrap">
              <p className="text-slate-900 text-base box-border leading-6 text-center text-nowrap font-inter">innovators worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="static box-content shrink mix-blend-normal opacity-100 transform-none w-auto z-auto left-auto top-auto md:absolute md:aspect-[1.5425_/_1] md:box-border md:shrink-0 md:mix-blend-screen md:opacity-70 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-49px] md:translate-x-[-833.217px] md:translate-y-[24.2734px] md:w-[1713px] md:z-[1] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:left-[45%]">
        <div className="static box-content inset-auto md:absolute md:aspect-auto md:box-border md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
          <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/dDB4JCGfoX5DJBUD3qohcdOK9U.png" alt="" className="box-content h-auto object-fill align-middle w-auto md:aspect-[auto_617_/_400] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
        </div>
      </div>
    </section>
  );
}
