export interface Feature {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
}

export const integrationFeatures: Feature[] = [
  {
    id: 'automation',
    title: 'Seamless Automation',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-11.svg"
  },
  {
    id: 'sync',
    title: 'Real-Time Data Sync',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-12.svg"
  },
  {
    id: 'customizable',
    title: 'Customizable Solutions',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-13.svg"
  }
] as const;

export const marketingFeatures: Feature[] = [
  {
    id: 'collaboration',
    title: 'Expert Collaboration',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-24.svg"
  },
  {
    id: 'integration',
    title: 'Seamless Integration',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-25.svg"
  },
  {
    id: 'scalable',
    title: 'Scalable Solutions',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-26.svg"
  }
] as const;
