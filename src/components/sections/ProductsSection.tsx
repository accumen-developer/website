import React, { useRef, useEffect } from "react";
import { productItems } from '../../data/products';
import { scrollingTextItems1, scrollingTextItems2 } from '../../data/scrollingtexts';
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import { Slide } from "../packages/Slide";
import Fab from "@mui/material/Fab";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion, useAnimation } from "framer-motion";

export function ProductsSection() {

  const ref: any = React.useRef(StackedCarousel);

  const items1 = [...scrollingTextItems1, ...scrollingTextItems1];
  const items2 = [...scrollingTextItems2, ...scrollingTextItems2];

  const listRef = useRef(null);
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    // We only need to start the animation once
    if (!listRef.current) return;

    const singleListWidth = listRef.current.scrollWidth / 2;

    controls1.start({
      x: [0, -singleListWidth], // Scrolls up by the height of one list copy
      transition: {
        x: {
          duration: 30, // Adjust for desired speed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop", // Instantly resets to the start after each loop
        },
      },
    });

  }, [controls1]);
  useEffect(() => {
    // We only need to start the animation once
    if (!listRef.current) return;

    const singleListWidth = listRef.current.scrollWidth / 2;

    controls2.start({
      x: [-singleListWidth, 0], // Scrolls up by the height of one list copy
      transition: {
        x: {
          duration: 30, // Adjust for desired speed
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop", // Instantly resets to the start after each loop
        },
      },
    });

  }, [controls2]);

  return (
    <section id="products" className="relative content-center items-center box-border gap-x-20 flex flex-col shrink-0 h-min justify-center max-w-[1200px] gap-y-20 w-full z-[1] overflow-hidden px-[18px] py-20 rounded-[20px] md:gap-x-8 md:gap-y-8 md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border gap-x-11 flex flex-col shrink-0 h-min justify-start gap-y-11 w-full z-[3]">
        <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-screen-sm gap-y-4 w-full z-[3]">
          <div className="relative box-border shrink-0">
            <div className="relative content-center items-center bg-sky-50/90 shadow-[rgba(240,248,255,0.9)_0px_0px_0px_2px] box-border gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden px-3 py-0.5 rounded-[60px] after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-zinc-200 after:rounded-[60px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border shrink-0 h-[17px] opacity-80 w-[17px]">
                <div className="box-border contents">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-4.svg" alt="Icon" className="text-slate-900 box-border inline-block shrink-0 h-full w-full" />
                </div>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">Products</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Our Products / Solutions</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Explore our innovative product suite designed to empower your business.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-screen h-[300px]">
          <div style={{ width: "100%", position: "relative" }}>
            <ResponsiveContainer
              carouselRef={ref}
              render={(width, carouselRef) => {
                return (
                  <StackedCarousel
                    ref={carouselRef}
                    slideComponent={Slide}
                    slideWidth={450}
                    carouselWidth={width}
                    data={productItems}
                    maxVisibleSlide={5}
                    currentVisibleSlide={3}
                    disableSwipe
                    transitionTime={450}
                  />
                );
              }}
            />
            <Fab
              className='card-button left'
              style={{ position: "absolute", top: "40%", left: 10, zIndex: 10 }}
              size='small'
              color="primary"
              onClick={() => ref.current?.goBack()}
            >
              <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
            </Fab>
            <Fab
              className='card-button right'
              style={{ position: "absolute", top: "40%", right: 10, zIndex: 10 }}
              size='small'
              color="primary"
              onClick={() => ref.current?.goNext()}
            >
              <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
            </Fab>
          </div>
        </div>

        <div className="relative content-center items-center box-border gap-x-0 flex flex-col shrink-0 h-min justify-center gap-y-0 w-full overflow-hidden">
          <div className="relative box-border shrink-0 h-[88px] max-w-screen-xl w-full md:h-20">
            <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <section className="[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                <div className="w-full mx-auto overflow-hidden rounded-lg">
                  <motion.ul
                    ref={listRef}
                    className="list-none p-0 m-0 flex items-center justify-between gap-2.5 w-full"
                    animate={controls1}
                  >
                    {Array.from({ length: 4 }).map((_, groupIndex) =>
                      scrollingTextItems1.map((item) => (
                        <li key={`${item.id}-${groupIndex}`} className="box-content h-auto min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content shrink h-auto md:relative md:aspect-auto md:box-border md:shrink-0 md:h-12 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-zinc-200 md:box-border md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[228px]">
                              <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    )}
                  </motion.ul>
                </div>
              </section>
            </div>
          </div>
          <div className="relative box-border shrink-0 h-[78px] max-w-screen-xl w-full md:h-20">
            <div className="box-content block md:aspect-auto md:box-border md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
              <section className="[align-items:normal] box-content block h-auto list-disc max-h-none max-w-none w-auto md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgb(0,0,0)_12.5%,rgb(0,0,0)_87.5%,rgba(0,0,0,0)_100%)] md:items-center md:aspect-auto md:box-border md:flex md:h-full md:justify-items-center md:list-none md:max-h-full md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-2.5 md:scroll-m-0 md:scroll-p-[auto]">
                <div className="w-full mx-auto overflow-hidden rounded-lg">
                  <motion.ul
                    ref={listRef}
                    className="list-none p-0 m-0 flex items-center justify-between gap-2.5 w-full"
                    animate={controls2}
                  >
                    {Array.from({ length: 4 }).map((_, groupIndex) =>
                      scrollingTextItems2.map((item) => (
                        <li key={`${item.id}-${groupIndex}`} className="box-content h-auto min-h-0 min-w-0 text-left md:aspect-auto md:box-border md:h-12 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                          <div className="static box-content shrink h-auto md:relative md:aspect-auto md:box-border md:shrink-0 md:h-12 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                            <div className="static [align-items:normal] bg-transparent box-content gap-x-[normal] block flex-row h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:content-center md:items-center md:aspect-auto md:bg-zinc-200 md:box-border md:gap-x-2.5 md:flex md:flex-col md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-2.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-min md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[228px]">
                              <div className="static box-content block flex-row shrink justify-normal min-h-0 min-w-0 text-wrap md:relative md:aspect-auto md:box-border md:flex md:flex-col md:shrink-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
                                <p className="text-black text-base box-content leading-[normal] min-h-0 min-w-0 text-start text-wrap font-times md:text-slate-900 md:aspect-auto md:box-border md:leading-6 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:text-center md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    )}
                  </motion.ul>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full">
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {productItems.slice(0, 3).map((card) => (
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
                        {card.features && card.features.length > 0 && (
                          <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter mt-2">
                            {card.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        )}
                        {card.applications && card.applications.length > 0 && (
                          <>
                            <h5 className="text-slate-900 text-lg font-bold box-border leading-6 break-words text-left font-inter mt-2">Applications:</h5>
                            <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter">
                              {card.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full">
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {productItems.slice(3, 6).map((card) => (
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
                        {card.features && card.features.length > 0 && (
                          <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter mt-2">
                            {card.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        )}
                        {card.applications && card.applications.length > 0 && (
                          <>
                            <h5 className="text-slate-900 text-lg font-bold box-border leading-6 break-words text-left font-inter mt-2">Applications:</h5>
                            <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter">
                              {card.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 min-w-[700px]">
          <div className="relative content-start items-start box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full md:flex-row">
            {productItems.slice(6, 9).map((card) => (
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
                        {card.features && card.features.length > 0 && (
                          <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter mt-2">
                            {card.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        )}
                        {card.applications && card.applications.length > 0 && (
                          <>
                            <h5 className="text-slate-900 text-lg font-bold box-border leading-6 break-words text-left font-inter mt-2">Applications:</h5>
                            <ul className="list-disc list-inside text-slate-900 text-base box-border leading-6 break-words text-left font-inter">
                              {card.applications.map((app, idx) => (
                                <li key={idx}>{app}</li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}