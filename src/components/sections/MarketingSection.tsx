import React from 'react';
import { marketingFeatures } from '../../data/features';

export function MarketingSection() {
  const marketingCards = [
    {
      id: 'campaign-automation',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-18.svg",
      title: 'Campaign Automation',
      description: 'Create and execute campaigns with ease using AI-driven automation for maximum efficiency'
    },
    {
      id: 'personalized-outreach',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-19.svg",
      title: 'Personalized Outreach',
      description: 'Deliver tailored messages to each customer for more impactful and engaging communication'
    },
    {
      id: 'data-optimization',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-20.svg",
      title: 'Data Optimization',
      description: 'Analyze performance with detailed analytics to fine-tune campaigns and boost results'
    },
    {
      id: 'seamless-collaboration',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-21.svg",
      title: 'Seamless Collaboration',
      description: 'Seamlessly integrate with existing tools to enhance team productivity and coordination'
    },
    {
      id: 'real-time-insights',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-22.svg",
      title: 'Real-Time Insights',
      description: 'Monitor customer interactions and adapt strategies in real time for optimal engagement'
    },
    {
      id: 'future-proof',
      icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-23.svg",
      title: 'Future-Proof Solutions',
      description: 'Stay ahead with continuous updates, and built-in adaptability for evolving needs.'
    }
  ];

  return (
    <section className="relative content-center items-center bg-zinc-200 box-border gap-x-8 flex flex-col shrink-0 h-min justify-center max-w-[1200px] gap-y-8 w-full z-[1] overflow-hidden px-[18px] py-20 rounded-[20px] md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border gap-x-11 flex flex-col shrink-0 h-min justify-start max-w-[1200px] gap-y-11 w-full z-[3]">
        <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-screen-sm gap-y-4 w-full z-[3]">
          <div className="relative box-border shrink-0">
            <div className="relative content-center items-center bg-sky-50/90 shadow-[rgba(240,248,255,0.9)_0px_0px_0px_2px] box-border gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden px-3 py-0.5 rounded-[60px] after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-zinc-200 after:rounded-[60px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border shrink-0 h-[17px] opacity-80 w-[17px]">
                <div className="box-border contents">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-17.svg" alt="Icon" className="text-slate-900 box-border inline-block shrink-0 h-full w-full" />
                </div>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">Effortless Deployment</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">AI-Powered</span>
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Marketing</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Simplify</span>
                <span className="box-border inline-block break-words">deployment</span>
                <span className="box-border inline-block break-words">for</span>
                <span className="box-border inline-block break-words">unmatched</span>
                <span className="box-border inline-block break-words">scalability</span>
                <span className="box-border inline-block break-words">and</span>
                <span className="box-border inline-block break-words">impact</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full">
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {marketingCards.slice(0, 3).map((card) => (
              <div key={card.id} className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content basis-auto grow-0 shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.05)_0px_0.706592px_0.706592px_-0.291667px,rgba(16,49,77,0.06)_0px_1.80656px_1.80656px_-0.583333px,rgba(16,49,77,0.06)_0px_3.62176px_3.62176px_-0.875px,rgba(16,49,77,0.06)_0px_6.8656px_6.8656px_-1.16667px,rgba(16,49,77,0.07)_0px_13.6468px_13.6468px_-1.45833px,rgba(16,49,77,0.1)_0px_30px_30px_-1.75px] md:box-border md:gap-x-8 md:flex md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                    <div className="static [align-items:normal] box-content gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:gap-x-4 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.21)_0px_0.796192px_1.43315px_-0.875px,rgba(16,49,77,0.2)_0px_2.41451px_4.34611px_-1.75px,rgba(16,49,77,0.17)_0px_6.38265px_11.4888px_-2.625px,rgba(16,49,77,0.09)_0px_20px_36px_-3.5px] md:box-border md:gap-x-20 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-20 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                        <img src={card.icon} alt="Icon" className="static box-content shrink align-middle w-auto md:relative md:aspect-square md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                      <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <h4 className="text-black text-base font-bold box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:text-2xl md:font-medium md:aspect-auto md:box-border md:leading-9 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{card.title}</h4>
                      </div>
                      <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {marketingCards.slice(3, 6).map((card) => (
              <div key={card.id} className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                <div className="static box-content basis-auto grow-0 shrink min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                  <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block h-auto justify-normal gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.05)_0px_0.706592px_0.706592px_-0.291667px,rgba(16,49,77,0.06)_0px_1.80656px_1.80656px_-0.583333px,rgba(16,49,77,0.06)_0px_3.62176px_3.62176px_-0.875px,rgba(16,49,77,0.06)_0px_6.8656px_6.8656px_-1.16667px,rgba(16,49,77,0.07)_0px_13.6468px_13.6468px_-1.45833px,rgba(16,49,77,0.1)_0px_30px_30px_-1.75px] md:box-border md:gap-x-8 md:flex md:h-min md:justify-start md:overscroll-x-auto md:overscroll-y-auto md:gap-y-8 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-8 md:scroll-m-0 md:scroll-p-[auto] md:rounded-2xl">
                    <div className="static [align-items:normal] box-content gap-x-[normal] block basis-auto flex-row grow-0 shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto md:relative md:content-start md:items-start md:aspect-auto md:box-border md:gap-x-4 md:flex md:basis-0 md:flex-col md:grow md:shrink-0 md:h-min md:justify-start md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-4 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                      <div className="static [align-items:normal] bg-transparent shadow-none box-content gap-x-[normal] block shrink h-auto justify-normal min-h-0 min-w-0 gap-y-[normal] w-auto rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-slate-50 md:shadow-[rgba(16,49,77,0.21)_0px_0.796192px_1.43315px_-0.875px,rgba(16,49,77,0.2)_0px_2.41451px_4.34611px_-1.75px,rgba(16,49,77,0.17)_0px_6.38265px_11.4888px_-2.625px,rgba(16,49,77,0.09)_0px_20px_36px_-3.5px] md:box-border md:gap-x-20 md:flex md:shrink-0 md:h-min md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:gap-y-20 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2 md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg">
                        <img src={card.icon} alt="Icon" className="static box-content shrink align-middle w-auto md:relative md:aspect-square md:box-border md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-8 md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]" />
                      </div>
                      <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <h4 className="text-black text-base font-bold box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:text-2xl md:font-medium md:aspect-auto md:box-border md:leading-9 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{card.title}</h4>
                      </div>
                      <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 opacity-100 w-auto break-normal md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-start md:min-h-[auto] md:min-w-[auto] md:opacity-80 md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                        <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start break-normal font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:break-words md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-left md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative content-center items-center box-border gap-x-8 flex shrink-0 flex-wrap h-min justify-center gap-y-8 w-full overflow-hidden">
          {marketingFeatures.map((feature, index) => (
            <React.Fragment key={feature.id}>
              {index > 0 && <div className="static box-content basis-auto grow-0 shrink h-auto min-h-0 min-w-0 opacity-100 w-auto rounded-none md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:h-0.5 md:min-h-[auto] md:min-w-[auto] md:opacity-50 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-slate-500/50 after:md:rounded-lg after:md:border-separate after:md:border-[3px] after:md:border-dotted after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>}
              <div className="relative box-border shrink-0">
                <div className="relative content-center items-center box-border gap-x-2.5 flex h-min justify-start gap-y-2.5 w-min overflow-hidden">
                  <img src={feature.icon} alt="Icon" className="relative aspect-square box-border shrink-0 w-8" />
                  <div className="relative box-border flex flex-col shrink-0 justify-start opacity-80 text-nowrap">
                    <p className="text-slate-900 text-base box-border leading-6 text-center text-nowrap font-inter">{feature.title}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          <div className="static box-content basis-auto grow-0 shrink h-auto min-h-0 min-w-0 opacity-100 w-auto rounded-none md:relative md:aspect-auto md:box-border md:basis-0 md:grow md:shrink-0 md:h-0.5 md:min-h-[auto] md:min-w-[auto] md:opacity-50 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-px md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-lg after:md:accent-auto after:md:box-border after:md:text-black after:md:block after:md:text-xs after:md:not-italic after:md:normal-nums after:md:font-normal after:md:h-full after:md:tracking-[normal] after:md:leading-[normal] after:md:list-outside after:md:list-disc after:md:absolute after:md:text-start after:md:indent-[0px] after:md:normal-case after:md:visible after:md:w-full after:md:border-slate-500/50 after:md:rounded-lg after:md:border-separate after:md:border-[3px] after:md:border-dotted after:md:left-0 after:md:top-0 after:md:font-sans_serif"></div>
        </div>
      </div>
    </section>
  );
}
