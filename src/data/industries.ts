export interface IndustryItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export const industryItems: IndustryItem[] = [
  {
    id: 'retail',
    title: 'Retail',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-24.svg", // Placeholder icon
    description: 'Transforming the retail landscape with innovative AI and IoT solutions.'
  },
  {
    id: 'bfsi',
    title: 'BFSI (Banking, Financial Services, and Insurance)',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-25.svg", // Placeholder icon
    description: 'Enhancing security and efficiency in financial services with blockchain and AI.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-26.svg", // Placeholder icon
    description: 'Revolutionizing healthcare with AI-powered solutions for better patient care.'
  },
  {
    id: 'education',
    title: 'Education',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-27.svg", // Placeholder icon
    description: 'Empowering educational institutions with smart technologies for enhanced learning.'
  }
] as const;