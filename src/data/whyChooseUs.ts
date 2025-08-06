export interface WhyChooseUsItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    id: 'advanced-digital-transformation',
    title: 'Advanced Digital Transformation',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-15.svg", // Placeholder icon
    description: 'Leading the way in digital transformation with innovative strategies.'
  },
  {
    id: 'cutting-edge-technology',
    title: 'Cutting-edge technology products',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-16.svg", // Placeholder icon
    description: 'Delivering state-of-the-art products built with the latest technologies.'
  },
  {
    id: 'creativity',
    title: 'Creativity (making things simpler)',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-17.svg", // Placeholder icon
    description: 'Simplifying complex challenges with creative and intuitive solutions.'
  },
  {
    id: 'quality',
    title: 'Quality (no compromise)',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-18.svg", // Placeholder icon
    description: 'Unwavering commitment to delivering the highest quality in every aspect.'
  },
  {
    id: 'trust',
    title: 'Trust',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-19.svg", // Placeholder icon
    description: 'Building strong relationships based on transparency and reliability.'
  },
  {
    id: 'domain-expertise',
    title: 'Domain Expertise',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-20.svg", // Placeholder icon
    description: 'Deep industry knowledge and specialized expertise to meet unique needs.'
  },
  {
    id: 'agile-tech',
    title: 'Agile Tech',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-21.svg", // Placeholder icon
    description: 'Flexible and adaptive approach to technology development and deployment.'
  },
  {
    id: 'security',
    title: 'Security',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-22.svg", // Placeholder icon
    description: 'Robust security measures to protect your data and systems.'
  },
  {
    id: 'end-to-end-support',
    title: 'End-to-End Support',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-23.svg", // Placeholder icon
    description: 'Comprehensive support from initial consultation to post-implementation.'
  }
] as const;