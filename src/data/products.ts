export interface ProductItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
  readonly features?: readonly string[];
  readonly applications?: readonly string[];
}

export const productItems: ProductItem[] = [
  {
    id: 'accu-secure',
    title: 'Accu Secure',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-28.svg", // Placeholder icon
    description: 'AI-driven real-time event detection and threat identification.',
    features: [
      'Unusual event tracking',
      'Facial recognition',
      'Automated attendance',
      'Perimeter breach alerts',
      'Deployment options',
      'Multi-location tracking',
      'Data compliance'
    ],
    applications: [
      'Construction sites (PPE & Safety, Unknown Person/Visitor Tracking, Vehicle Analysis & Management, Entry and Exit Monitoring, CCTV-Based People & Object Counting)',
      'Smart Switches'
    ]
  },
  {
    id: 'accu-note-x',
    title: 'Accu Note X',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-29.svg", // Placeholder icon
    description: 'AI-powered healthcare solution for doctor-patient conversations, case sheets, and prescriptions.'
  },
  {
    id: 'accu-cine',
    title: 'Accu Cine',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-30.svg", // Placeholder icon
    description: 'AI-powered reimagining of classic movies with modern effects.'
  },
  {
    id: 'accu-hms',
    title: 'Accu HMS',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-31.svg", // Placeholder icon
    description: 'AI-powered hospital management system for streamlined operations and patient engagement.'
  },
  {
    id: 'accu-crm',
    title: 'Accu CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-32.svg", // Placeholder icon
    description: 'Comprehensive CRM solution.'
  },
  {
    id: 'accu-sales-crm',
    title: 'Accu Sales CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-33.svg", // Placeholder icon
    description: 'Lead management, pipeline tracking, automation & AI-driven insights, marketing tool integration.',
    features: [
      'Lead management',
      'Pipeline tracking',
      'Automation & AI-driven insights',
      'Marketing tool integration'
    ]
  },
  {
    id: 'accu-service-crm',
    title: 'Accu Service CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-34.svg", // Placeholder icon
    description: 'Ticket management, automated workflows, real-time customer feedback, omnichannel support.',
    features: [
      'Ticket management',
      'Automated workflows',
      'Real-time customer feedback',
      'Omnichannel support'
    ]
  },
  {
    id: 'accu-drones',
    title: 'Accu Drones',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-35.svg", // Placeholder icon
    description: 'Information on Peregrine and F400 drones, and the technology platform.',
    features: [
      'Flight Planning & Automation',
      'Data Collection & Analysis',
      'Historical Records & Logs',
      'Fleet Management',
      'Safety & Risk Management',
      'Enhanced Efficiency',
      'Reporting & Documentation'
    ]
  }
] as const;