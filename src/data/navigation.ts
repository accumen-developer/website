export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: './#home' },
  // { id: 'about-us', label: 'About Us', href: './#about-us' },
  // { id: 'technologies', label: 'Technologies', href: './#technologies' },
  // { id: 'why-choose-us', label: 'Why Choose Us', href: './#why-choose-us' },
  // { id: 'industries', label: 'Industries', href: './#industries' },
  { id: 'products', label: 'Products', href: './#products' },
  { id: 'it-services', label: 'Services', href: './#it-services' },
  { id: 'contact', label: 'Contact Us', href: './#contact' }
] as const;

export const footerNavigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: './#home' },
  { id: 'about-us', label: 'About Us', href: './#about-us' },
  { id: 'technologies', label: 'Technologies', href: './#technologies' },
  { id: 'why-choose-us', label: 'Why Choose Us', href: './#why-choose-us' },
  { id: 'industries', label: 'Industries', href: './#industries' },
  { id: 'products', label: 'Products', href: './#products' },
  { id: 'it-services', label: 'IT Enabled Services', href: './#it-services' },
  { id: 'contact', label: 'Contact Us', href: './#contact' },
  { id: 'privacy', label: 'Privacy', href: './privacy' },
  { id: 'terms', label: 'Terms', href: './terms' }
] as const;
