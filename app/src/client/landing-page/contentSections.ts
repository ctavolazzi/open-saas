import { DOCS_URL, BLOG_URL } from '../../shared/constants';
import daBoiAvatar from '../static/da-boi.png';
import avatarPlaceholder from '../static/avatar-placeholder.png';

export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Documentation', href: DOCS_URL },
  { name: 'Blog', href: BLOG_URL },
];
export const features = [
  {
    name: 'Your team of AI Agents',
    description: 'Manage a team of personalized AI agents.',
    icon: '🤖',
    href: DOCS_URL,
  },
  {
    name: 'Collaborating together',
    description: 'Agents work together in one complete system.',
    icon: '🤝',
    href: DOCS_URL,
  },
  {
    name: 'Solving complex problems',
    description: 'Multi-stage problem solving with ease.',
    icon: '🧩',
    href: DOCS_URL,
  },
  {
    name: 'So you can rest easy.',
    description: 'Agents work 24/7 so you don\'t have to.',
    icon: '🕊',
    href: DOCS_URL,
  },
];
export const testimonials = [
  {
    name: 'Da Boi',
    role: 'Wasp Mascot',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: "I don't even know how to code. I'm just a plushie.",
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Cool Startup',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'This product makes me cooler than I already am.',
  },
  {
    name: 'Jamie',
    role: 'Happy Customer',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: 'My cats love it!',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Whats the meaning of life?',
    answer: '42, of course.',
    href: 'https://en.wikipedia.org/wiki/42_(number)',
  },
  {
    id: 2,
    question: 'What is the speed of light?',
    answer: 'Approximately 299,792 kilometers per second.',
    href: 'https://en.wikipedia.org/wiki/Speed_of_light',
  },
  {
    id: 3,
    question: 'What is the distance from Earth to the Moon?',
    answer: 'Approximately 384,400 kilometers.',
    href: 'https://en.wikipedia.org/wiki/Moon',
  },
  {
    id: 4,
    question: 'What is the Pythagorean theorem?',
    answer: 'In a right angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides.',
    href: 'https://en.wikipedia.org/wiki/Pythagorean_theorem',
  },
  {
    id: 5,
    question: 'What is the capital of Australia?',
    answer: 'Canberra.',
    href: 'https://en.wikipedia.org/wiki/Canberra',
  },
  // Add more FAQs as needed
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DOCS_URL },
    { name: 'Blog', href: BLOG_URL },
  ],
  company: [
    { name: 'About', href: 'https://wasp-lang.dev' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
