export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'it-services', label: 'Services', href: '/services' },
  { id: 'contact', label: 'Contact Us', href: '/contact-us' }
] as const;

export const footerNavigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'products', label: 'Products', href: '/products' },
  { id: 'it-services', label: 'IT Enabled Services', href: '/services' },
  { id: 'contact', label: 'Contact Us', href: '/contact-us' },
  { id: 'privacy', label: 'Privacy', href: './privacy' },
  { id: 'terms', label: 'Terms', href: './terms' }
] as const;
