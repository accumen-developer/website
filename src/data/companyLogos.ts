export interface CompanyLogo {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly className: string;
  readonly imgClassName: string;
}

export const companyLogos: CompanyLogo[] = [
  {
    id: 'logo1',
    src: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/YUxV3rqZ7Wvh1h97M9ho3OJO0.svg",
    alt: '',
    className: "relative aspect-[3.53333_/_1] box-border shrink-0 opacity-70 w-[106px] overflow-hidden",
    imgClassName: "aspect-[auto_75_/_17] box-border h-full object-contain w-full"
  },
  {
    id: 'logo2',
    src: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/EboQqPMe8PvYShxr0q82nHBVaec.svg",
    alt: '',
    className: "relative aspect-[2.16667_/_1] box-border shrink-0 opacity-70 w-[65px] overflow-hidden",
    imgClassName: "aspect-[auto_45_/_14] box-border h-full object-contain w-full"
  },
  {
    id: 'logo3',
    src: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/bn15sRZOZ1zNW6U4lKel1VE9eA.svg",
    alt: '',
    className: "relative aspect-[2.13333_/_1] box-border shrink-0 opacity-70 w-16 overflow-hidden",
    imgClassName: "aspect-[auto_58_/_19] box-border h-full object-contain w-full"
  },
  {
    id: 'logo4',
    src: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/iDUtqN0QXPf3CrA1JgKCl01lasg.svg",
    alt: '',
    className: "relative aspect-[2.66667_/_1] box-border shrink-0 opacity-70 w-20 overflow-hidden",
    imgClassName: "aspect-[auto_57_/_18] box-border h-full object-contain w-full"
  },
  {
    id: 'logo5',
    src: "https://c.animaapp.com/mdyshqnrhjJKpN/assets/vICkLbycO96hE8662eq2BfqKXs.svg",
    alt: '',
    className: "relative aspect-[2.6_/_1] box-border shrink-0 opacity-70 w-[78px] overflow-hidden",
    imgClassName: "aspect-[auto_69_/_24] box-border h-full object-contain w-full"
  }
] as const;
