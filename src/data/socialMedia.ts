export interface SocialMediaLink {
  readonly id: string;
  readonly href: string;
  readonly icon: string;
  readonly label: string;
}

export const socialMediaLinks: SocialMediaLink[] = [
  {
    id: 'instagram1',
    href: "https://instagram.com/",
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-36.svg",
    label: 'Instagram'
  },
  {
    id: 'instagram2',
    href: "https://linkedin.com/",
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-37.svg",
    label: 'Instagram'
  },
  {
    id: 'youtube',
    href: 'https://youtube.com/',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-38.svg",
    label: 'Instagram'
  },
  {
    id: 'twitter',
    href: 'https://x.com/',
    icon: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/icon-39.svg",
    label: 'Instagram'
  }
] as const;
