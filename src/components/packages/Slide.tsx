import React from "react";
import { StackedCarouselSlideProps } from "react-stacked-center-carousel";
import './Slide.css';

export const Slide = React.memo(function (StackedCarouselSlideProps) {
    const {
        data,
        dataIndex,
        isCenterSlide,
        swipeTo,
        slideIndex
    } = StackedCarouselSlideProps;

    const card: any = data[dataIndex];

    return (
        <div className="transition-all duration-300 ease-[ease] cursor-pointer w-full relative bg-white shadow-[0_6px_16px_rgba(0,0,0,0.2),0_0_4px_rgba(0,0,0,0.05)] rounded-[15px] hover:scale-105" draggable={false}>
            <div className={`absolute transition-opacity duration-300 ease-[ease] w-full h-full ${isCenterSlide ? "opacity-0 z-[-1]" : "opacity-100 z-[1]"}`}>
                <div
                    className="select-none absolute bg-[#c3bebe99] hover:bg-[#0000002d] transition-all duration-300 ease-[ease] rounded-[15px] w-full h-full"
                    onClick={() => {
                        if (!isCenterSlide) swipeTo(slideIndex);
                    }}
                />
            </div>
            <div className="flex w-full h-full">
                <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full">
                    <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
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
                                            {/* {card.features && card.features.length > 0 && (
                                                <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter mt-2">
                                                    {card.features.map((feature: any, idx: any) => (
                                                        <li key={idx}>{feature}</li>
                                                    ))}
                                                </ul>
                                            )} */}
                                            {/* {card.applications && card.applications.length > 0 && (
                                                <>
                                                    <h5 className="text-slate-900 text-lg font-bold box-border leading-6 break-words text-left font-inter mt-2">Applications:</h5>
                                                    <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter">
                                                        {card.applications.map((app: any, idx: any) => (
                                                            <li key={idx}>{app}</li>
                                                        ))}
                                                    </ul>
                                                </>
                                            )} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
