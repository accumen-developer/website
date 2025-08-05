export interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly badge?: string;
  readonly ctaClassName: string;
  readonly ctaTextClassName: string;
  readonly ctaIcon: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$12',
    description: 'Everything in starter plan',
    features: [
      'Unlimited AI usage here',
      'Premium support',
      'Customer care on point',
      'Collaboration tools'
    ],
    ctaClassName: "static text-black [align-items:normal] bg-none shadow-none box-content gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(125deg,rgba(94,120,143,0.5)_-44%,rgba(240,248,255,0.9)_100%)] md:shadow-[rgb(216,223,229)_0px_1px_2px_0px_inset,rgba(121,152,189,0.34)_0px_0.796192px_0.796192px_-0.875px,rgba(121,152,189,0.33)_0px_2.41451px_2.41451px_-1.75px,rgba(121,152,189,0.29)_0px_6.38265px_6.38265px_-2.625px,rgba(121,152,189,0.15)_0px_20px_20px_-3.5px] md:box-border md:gap-x-1.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]",
    ctaTextClassName: "text-black text-base font-normal box-content leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-slate-900 md:text-sm md:font-medium md:aspect-auto md:box-border md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter",
    ctaIcon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-28.svg"
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$17',
    description: 'Everything in Pro plan',
    badge: 'Popular',
    features: [
      'Integrations with 3rd-party',
      'Advanced analytics',
      'Team performance tracking',
      'Top grade security',
      'Customizable Solutions'
    ],
    ctaClassName: "static text-black [align-items:normal] bg-none shadow-none box-content gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(127deg,rgb(14,28,41)_-68%,rgb(50,61,104)_100%)] md:shadow-[rgb(184,193,230)_0px_1px_2px_0px_inset,rgba(46,64,128,0.35)_0px_0.706592px_0.706592px_-0.583333px,rgba(46,64,128,0.34)_0px_1.80656px_1.80656px_-1.16667px,rgba(46,64,128,0.33)_0px_3.62176px_3.62176px_-1.75px,rgba(46,64,128,0.3)_0px_6.8656px_6.8656px_-2.33333px,rgba(46,64,128,0.26)_0px_13.6468px_13.6468px_-2.91667px,rgba(46,64,128,0.15)_0px_30px_30px_-3.5px] md:box-border md:gap-x-1.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]",
    ctaTextClassName: "text-black text-base font-normal box-content leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-white md:text-sm md:font-medium md:aspect-auto md:box-border md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter",
    ctaIcon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-1.svg"
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$97',
    description: 'Dedicated account manager',
    features: [
      'Custom reports & dashboards',
      'Most performance usage',
      'Enterprise-grade security',
      'Customizable Solutions',
      'Seamless Integration',
      'Dedicated account manager'
    ],
    ctaClassName: "static text-black [align-items:normal] bg-none shadow-none box-content gap-x-[normal] inline h-auto justify-normal gap-y-[normal] w-auto p-0 rounded-none md:relative md:text-blue-700 md:content-center md:items-center md:aspect-auto md:bg-[linear-gradient(125deg,rgba(94,120,143,0.5)_-44%,rgba(240,248,255,0.9)_100%)] md:shadow-[rgb(216,223,229)_0px_1px_2px_0px_inset,rgba(121,152,189,0.34)_0px_0.796192px_0.796192px_-0.875px,rgba(121,152,189,0.33)_0px_2.41451px_2.41451px_-1.75px,rgba(121,152,189,0.29)_0px_6.38265px_6.38265px_-2.625px,rgba(121,152,189,0.15)_0px_20px_20px_-3.5px] md:box-border md:gap-x-1.5 md:flex md:h-min md:justify-center md:overscroll-x-auto md:overscroll-y-auto md:gap-y-1.5 md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:px-6 md:py-3 md:scroll-m-0 md:scroll-p-[auto] md:rounded-[10px]",
    ctaTextClassName: "text-black text-base font-normal box-content leading-[normal] min-h-0 min-w-0 text-wrap font-times md:text-slate-900 md:text-sm md:font-medium md:aspect-auto md:box-border md:leading-[22.4px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:text-nowrap md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:font-inter",
    ctaIcon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-28.svg"
  }
] as const;
