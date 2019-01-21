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
        route: '/features/bookkeeping'
      },
      {
        name: 'Sales Tax',
        route: '/features/sales-tax'
      },
      {
        name: 'Payroll Tax',
        route: '/features/payroll-tax'
      },
      {
        name: 'Tax Returns',
        route: '/features/tax-returns'
      },
      {
        name: 'Government Notices',
        route: '/features/government-notices'
      },
      {
        name: 'Lookback Services',
        route: '/features/lookback-services'
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
