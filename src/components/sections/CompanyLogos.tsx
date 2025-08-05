import React from 'react';
import { companyLogos } from '../../data/companyLogos';

export function CompanyLogos() {
  return (
    <div className="relative content-center items-center box-border gap-x-8 flex flex-col shrink-0 h-min justify-center gap-y-8 w-full overflow-hidden">
      <div className="relative content-center items-center box-border gap-x-4 flex shrink-0 h-min justify-center gap-y-4 w-full z-[1]">
        <div className="relative box-border basis-0 grow-[0.5] shrink-0 h-0.5 opacity-50 w-px overflow-hidden rounded-lg md:grow after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-slate-500/50 after:rounded-lg after:border-separate after:border-[3px] after:border-dotted after:left-0 after:top-0 after:font-sans_serif"></div>
        <div className="relative box-border flex basis-0 flex-col grow-[3] shrink-0 justify-start break-words w-px md:grow-[1.5]">
          <p className="text-slate-900 text-base box-border leading-6 break-words text-center font-inter">Adopted by renowned, trusted, and leading enterprises</p>
        </div>
        <div className="relative box-border basis-0 grow-[0.5] shrink-0 h-0.5 opacity-50 w-px overflow-hidden rounded-lg md:grow after:accent-auto after:box-border after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-full after:border-slate-500/50 after:rounded-lg after:border-separate after:border-[3px] after:border-dotted after:left-0 after:top-0 after:font-sans_serif"></div>
      </div>
      <div className="relative content-center items-center box-border gap-x-[30px] flex flex-col shrink-0 flex-wrap h-min justify-center gap-y-[30px] w-full z-[1]">
        <div className="relative content-center items-center box-border gap-x-8 flex shrink-0 flex-wrap h-min justify-center opacity-90 gap-y-8 w-full overflow-hidden md:gap-x-[54px] md:gap-y-[54px]">
          {companyLogos.map((logo) => (
            <div key={logo.id} className={logo.className}>
              <div className="absolute box-border inset-0">
                <img src={logo.src} alt={logo.alt} className={logo.imgClassName} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
