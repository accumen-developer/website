export interface TechnologyItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly features: readonly string[];
}

export const technologyItems: TechnologyItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence (AI)',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-11.svg", // Placeholder icon, can be updated
    description: 'Transforming industries with cutting-edge AI solutions.',
    features: [
      'Predictive analytics',
      'Computer vision',
      'Natural language processing',
      'AI automation'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-12.svg", // Placeholder icon, can be updated
    description: 'Delivering intelligent, scalable, secure technology systems.',
    features: [
      'Smart contracts',
      'dApps',
      'Secure data management',
      'Digital identity'
    ]
  },
  {
    id: 'iot',
    title: 'Internet of Things (IoT)',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-13.svg", // Placeholder icon, can be updated
    description: 'Empowering a smarter, connected future across industries.',
    features: [
      'Smart device integration',
      'Real-time monitoring',
      'Connected ecosystems'
    ]
  }
] as const;