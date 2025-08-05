export interface Testimonial {
  readonly id: string;
  readonly content: string;
  readonly author: string;
  readonly company: string;
  readonly avatar: string;
  readonly avatarClassName: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'brendan',
    content: 'An absolute standout! This platform delivers robust tools, effortless connectivity, and usability',
    author: 'Brendan',
    company: 'owner of plantio',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/11.avif",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3456_/_3456] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  },
  {
    id: 'wilson',
    content: 'A remarkable solution! It provides top-tier features, intuitive interfaces, and reliability',
    author: 'Wilson',
    company: 'owner of saan',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/13.avif",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_4000_/_4000] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  },
  {
    id: 'mayak',
    content: 'A genuine innovation! Experience advanced tools, smooth workflows, and high utility',
    author: 'mayak',
    company: 'owner of deconec',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/14.avif",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_1024_/_1024] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  },
  {
    id: 'jacychan',
    content: 'A revolutionary platform! Packed with cutting-edge tools, integration ease, and functionality',
    author: 'jacychan',
    company: 'owner of canacio',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/15.avif",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3155_/_4733] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  },
  {
    id: 'jamesli',
    content: 'A real breakthrough! Unlock next-gen features, seamless compatibility, and efficiency',
    author: 'jamesli',
    company: 'owner of gito',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/12.avif",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3648_/_5472] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  },
  {
    id: 'janney',
    content: 'A standout choice! Combining advanced features, smooth syncing, and practicality',
    author: 'janney',
    company: 'owner of ioptp',
    avatar: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/38.jpg",
    avatarClassName: "box-content h-auto object-fill align-middle w-auto rounded-none md:aspect-[auto_3456_/_5184] md:box-border md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:rounded-[12%]"
  }
] as const;
