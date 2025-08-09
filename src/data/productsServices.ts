export interface ProductServiceItem {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export const productsServicesItems: ProductServiceItem[] = [
  {
    id: 'accu-secure',
    title: 'Accu Secure',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-28.svg",
    description: 'AI-driven real-time event detection and threat identification.'
  },
  {
    id: 'accu-note-x',
    title: 'Accu Note X',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-29.svg",
    description: 'AI-powered healthcare solution for doctor-patient conversations.'
  },
  {
    id: 'accu-cine',
    title: 'Accu Cine',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-30.svg",
    description: 'AI-powered reimagining of classic movies with modern effects.'
  },
  {
    id: 'accu-hms',
    title: 'Accu HMS',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-31.svg",
    description: 'AI-powered hospital management system for streamlined operations.'
  },
  {
    id: 'accu-crm',
    title: 'Accu CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-32.svg",
    description: 'Comprehensive CRM solution for managing customer relationships.'
  },
  {
    id: 'accu-sales-crm',
    title: 'Accu Sales CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-33.svg",
    description: 'Lead management, pipeline tracking, and AI-driven sales insights.'
  },
  {
    id: 'accu-service-crm',
    title: 'Accu Service CRM',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-34.svg",
    description: 'Ticket management, automated workflows, and real-time customer feedback.'
  },
  {
    id: 'accu-drones',
    title: 'Accu Drones',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-35.svg",
    description: 'Advanced drone technology for various applications and data collection.'
  },
  {
    id: 'backend-support',
    title: 'Backend Support',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-36.svg",
    description: 'Comprehensive backend support to ensure seamless operations.'
  },
  {
    id: 'end-user-solutions',
    title: 'End-User Solutions',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-37.svg",
    description: 'Tailored solutions designed to enhance end-user experience.'
  }
] as const;