export interface NavItem {
  name: string;
  route?: string;
  subList?: NavItem[];
}

export const navList: NavItem[] = [
  {
    name: 'Feature',
    subList: [
      {
        name: 'Bookkeeping',
        route: ''
      },
      {
        name: 'Sales Tax',
        route: '/sales-tax'
      },
      {
        name: 'Payroll Tax',
        route: ''
      },
      {
        name: 'Tax Returns',
        route: '/tax-returns'
      },
      {
        name: 'Government Notices',
        route: ''
      },
      {
        name: 'Lookback Services',
        route: ''
      }
    ]
  },
  {
    name: 'Resources',
    subList: [
      {
        name: 'FAQs',
        route: ''
      },
      {
        name: 'Glossary',
        route: ''
      },
      {
        name: 'Blog',
        route: ''
      },
      {
        name: 'Tutorial',
        route: ''
      }
    ]
  },
  {
    name: 'Our Company',
    subList: [
      {
        name: 'What We Do',
        route: ''
      },
      {
        name: 'Terms and Conditions',
        route: ''
      },
      {
        name: 'Privacy Policy',
        route: ''
      }
    ]
  },
  {
    name: 'Blog',
    route: '/blog'
  }
];
