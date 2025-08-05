export interface FAQItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 'what-is-alter',
    question: 'What is Alter ?',
    answer: 'Alter is a Framer template designed to help you build professional, enterprise-ready AI agent websites quickly and efficiently.'
  },
  {
    id: 'seo-optimized',
    question: 'Is Alter optimized for SEO ?',
    answer: 'Yes, Alter is built with SEO-friendly practices to help your website rank better on search engines.'
  },
  {
    id: 'coding-skills',
    question: 'Do I need coding skills to use Alter ?',
    answer: 'No! Alter is built for designers and non-technical users. Framer\'s intuitive interface allows you to customize without writing code.'
  },
  {
    id: 'customization',
    question: 'Can I customize Alter to fit my brand ?',
    answer: 'Absolutely. Alter offers flexible customization options, including fonts, colors, layouts, and more, to match your brand identity.'
  },
  {
    id: 'mobile-responsive',
    question: 'Does Alter include mobile responsiveness ?',
    answer: 'Yes! Alter is fully responsive and optimized for all devices, ensuring a seamless user experience across desktops, tablets, and mobile phones.'
  }
] as const;
