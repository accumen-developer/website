import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { whyChooseUsItems } from '../../data/whyChooseUs';

export function AboutUsSection() {

  const items = [...whyChooseUsItems, ...whyChooseUsItems];

    const listRef = useRef(null);
    const controls = useAnimation();
  
    useEffect(() => {
      // We only need to start the animation once
      if (!listRef.current) return;
  
      const singleListHeight = listRef.current.scrollHeight / 2;
  
      controls.start({
        y: [0, -singleListHeight], // Scrolls up by the height of one list copy
        transition: {
          y: {
            duration: 15, // Adjust for desired speed
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop", // Instantly resets to the start after each loop
          },
        },
      });
  
    }, [controls]);


  return (
    <section id="about-us" className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full px-[18px] py-20 rounded-[20px] md:px-10 md:py-[100px]">
      <div className="relative content-center items-center box-border gap-x-11 flex shrink-0 h-min justify-start max-w-[1200px] gap-y-11 w-full z-[3]">
        <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-start max-w-screen-sm gap-y-4 w-full z-[3]">
          <div className="relative box-border shrink-0">
            <div className="relative content-center items-center bg-sky-50/90 shadow-[rgba(240,248,255,0.9)_0px_0px_0px_2px] box-border gap-x-2 flex h-min justify-center gap-y-2 w-min overflow-hidden px-3 py-0.5 rounded-[60px] after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border after:border-zinc-200 after:rounded-[60px] after:border-separate after:border-solid after:left-0 after:top-0 after:font-sans_serif">
              <div className="relative box-border shrink-0 h-[17px] opacity-80 w-[17px]">
                <div className="box-border contents">
                  <img src="https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-14.svg" alt="Icon" className="text-slate-900 box-border inline-block shrink-0 h-full w-full" />
                </div>
              </div>
              <div className="relative box-border flex flex-col shrink-0 justify-start text-nowrap">
                <p className="text-slate-900 text-sm box-border leading-[22.4px] text-nowrap font-inter">About Us</p>
              </div>
            </div>
          </div>
          <div className="relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 h-min justify-center gap-y-4 w-full">
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full z-[2]">
              <h2 className="text-slate-900 text-4xl box-border tracking-[-0.36px] leading-[43.2px] break-words text-center font-plus_jakarta_sans md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">
                <span className="text-4xl box-border inline-block tracking-[-0.36px] leading-[43.2px] break-words md:text-[56px] md:tracking-[-0.56px] md:leading-[67.2px]">Who We Are</span>
              </h2>
            </div>
            <div className="relative box-border flex flex-col shrink-0 justify-start break-words w-full">
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">
                <span className="box-border inline-block break-words">Accumenbridge is a tech startup transforming industries with cutting-edge AI, Blockchain, and IoT solutions.</span>
              </p>
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter mt-4">
                <span className="box-border inline-block break-words">Our Mission: "Deliver intelligent, scalable, secure technology systems."</span>
              </p>
              <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter mt-4">
                <span className="box-border inline-block break-words">Our Vision: "Empowering a smarter, connected future across industries."</span>
              </p>
            </div>
          </div>
        </div>

        <div className='relative content-center items-center box-border gap-x-4 flex flex-col shrink-0 justify-start max-w-screen-sm gap-y-4 w-full z-[3]'>

          <div className="w-full max-w-sm mx-auto h-[400px] overflow-hidden rounded-lg">
            <motion.ul
              ref={listRef}
              className="list-none p-0 m-0 flex items-center justify-between flex-col gap-2.5 "
              animate={controls}
            >
              {items.map((card,id) => (
                <li key={id} className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between max-w-[400px] min-w-[390px] mx-auto">
                  <span className="text-gray-800 text-lg font-semibold text-center w-[300px]">{card?.title}</span>
                  <img src={card?.icon} alt="Piggy Bank" className="h-8 w-8" />
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}