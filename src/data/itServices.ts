export interface ITServiceItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export const itServiceItems: ITServiceItem[] = [
  {
    id: 'backend-support',
    title: 'Backend Support',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-36.svg", // Placeholder icon
    description: 'Comprehensive backend support to ensure seamless operations.'
  },
  {
    id: 'end-user-solutions',
    title: 'End-User Solutions',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-37.svg", // Placeholder icon
    description: 'Tailored solutions designed to enhance end-user experience and productivity.'
  },
  {
    id: 'professionalism',
    title: 'Professionalism',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-38.svg", // Placeholder icon
    description: 'Delivering services with the highest standards of professionalism and integrity.'
  },
  {
    id: 'precision',
    title: 'Precision',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-39.svg", // Placeholder icon
    description: 'Meticulous attention to detail ensuring accuracy and reliability.'
  },
  {
    id: 'efficiency',
    title: 'Efficiency',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-40.svg", // Placeholder icon
    description: 'Optimizing processes for maximum efficiency and reduced operational costs.'
  },
  {
    id: 'reliability',
    title: 'Reliability',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-41.svg", // Placeholder icon
    description: 'Dependable services that you can count on, every time.'
  },
  {
    id: 'cost-effectiveness',
    title: 'Cost-Effectiveness',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-42.svg", // Placeholder icon
    description: 'Providing high-quality services at competitive prices.'
  }
] as const;