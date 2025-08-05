export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'features', label: 'Features', href: './#features' },
  { id: 'pricing', label: 'Pricing', href: './#pricing' },
  { id: 'changelog', label: 'Changelog', href: './changelog' },
  { id: 'contact', label: 'Contact', href: './contact' }
] as const;

export const footerNavigationItems: NavigationItem[] = [
  ...navigationItems,
  { id: 'privacy', label: 'Privacy', href: './privacy' },
  { id: 'terms', label: 'Terms', href: './terms' }
] as const;
