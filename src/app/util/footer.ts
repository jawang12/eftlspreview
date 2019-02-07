import {
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faYoutubeSquare,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons';

interface Social {
  link: string;
  icon: IconDefinition;
}

export const socials: Social[] = [
  {
    link: 'https://www.facebook.com/Efortles-Inc-611117022561501/',
    icon: faFacebook
  },
  {
    link: 'https://twitter.com/efortles_',
    icon: faTwitterSquare
  },
  {
    link: 'https://www.linkedin.com/company/efortles/',
    icon: faLinkedin
  },
  {
    link: 'https://www.youtube.com/channel/UCziR95-_EiFp0NHG7ZI7l8w',
    icon: faYoutubeSquare
  }
];

export const categories = ['Features', 'Pricing', 'Resources', 'Our Company'];

interface ListItem {
  title: string;
  route: string;
}

export const features: ListItem[] = [
  {
    title: 'Virtual Bookkeeping',
    route: ''
  },
  {
    title: 'Sales Tax Filing',
    route: ''
  },
  {
    title: 'Payroll Reporting',
    route: ''
  },
  {
    title: 'Income Tax Prep',
    route: ''
  },
  {
    title: 'Dedicated CPA',
    route: ''
  },
  {
    title: 'Audit Protection',
    route: ''
  },
  {
    title: 'Lookback Services',
    route: ''
  },
  {
    title: 'Government Notices',
    route: ''
  }
];

export const pricing: ListItem[] = [
  {
    title: 'Subscriptions',
    route: ''
  },
  {
    title: 'Compare Us',
    route: ''
  },
  {
    title: 'Build Your Plan',
    route: ''
  }
];

export const resources: ListItem[] = [
  {
    title: 'FAQs',
    route: ''
  },
  {
    title: 'Glossary',
    route: ''
  },
  {
    title: 'Blog',
    route: ''
  }
];

export const ourCompany = [
  {
    title: 'Our Values',
    route: ''
  },
  {
    title: 'Press',
    route: ''
  },
  {
    title: 'Careers',
    route: ''
  },
  {
    title: 'Contact Us',
    route: ''
  }
];
