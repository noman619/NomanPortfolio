import { Project, ExperienceItem, Skill, Service } from './types';
import { ShoppingBag, Layout, Smartphone, Zap, Code, BarChart3, Globe, Database } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Streetwear',
    category: 'Shopify Plus Store',
    image: '/v1.png',
    video: '/v1.mov',
    isLive: true,
    description: 'A high-performance headless Shopify store built with Hydrogen and Remix. Features real-time inventory and 3D product previews.',
    tags: ['Hydrogen', 'React', 'Tailwind', 'Sanity CMS'],
    stats: [{ label: 'Performance', value: '99/100' }, { label: 'Conversion', value: '+45%' }],
    link: '#'
  },
  {
    id: '2',
    title: 'Pure Organics',
    category: 'Custom Theme Dev',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2626&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/4206359/4206359-hd_1920_1080_25fps.mp4',
    isLive: true,
    description: 'Custom Liquid theme development focusing on accessibility and mobile-first UX. Integrated with Recharge for subscriptions.',
    tags: ['Liquid', 'JS', 'SCSS', 'Recharge'],
    stats: [{ label: 'AOV Increase', value: '25%' }],
    link: '#'
  },
  {
    id: '3',
    title: 'Cart Booster App',
    category: 'Shopify Public App',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2340&auto=format&fit=crop',
    description: 'A public Shopify App using the Remix template to help merchants upsell products in the cart drawer dynamically.',
    tags: ['Remix', 'Prisma', 'GraphQL', 'App Bridge'],
    link: '#'
  },
  {
    id: '4',
    title: 'Luxe Watches',
    category: 'UX/UI Redesign',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2359&auto=format&fit=crop',
    video: 'https://videos.pexels.com/video-files/855325/855325-hd_1920_1080_30fps.mp4',
    isLive: false,
    description: 'Complete visual overhaul for a luxury watch brand. Implemented GSAP animations and a custom product configurator.',
    tags: ['React', 'GSAP', 'Shopify API'],
    link: '#'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Senior Shopify Developer',
    company: 'E-com Agency X',
    period: '2021 - Present',
    description: 'Leading a team of 5 developers building custom themes for Shopify Plus clients. Specialized in migration from Magento to Shopify.',
    technologies: ['Shopify Plus', 'Liquid', 'React', 'Node.js']
  },
  {
    id: '2',
    role: 'Frontend Developer',
    company: 'Creative Studio',
    period: '2019 - 2021',
    description: 'Developed pixel-perfect UIs for lifestyle brands. Focused on interaction design and micro-animations.',
    technologies: ['Vue.js', 'SCSS', 'Webpack']
  },
  {
    id: '3',
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2017 - 2019',
    description: 'Helped small businesses launch their first online stores using Shopify and WordPress.',
    technologies: ['Shopify', 'WordPress', 'PHP']
  }
];

export const SKILLS: Skill[] = [
  { name: 'Shopify Liquid', icon: Code, level: 95, color: '#96bf48' },
  { name: 'React / Hydrogen', icon: Zap, level: 90, color: '#61dafb' },
  { name: 'UX/UI Design', icon: Layout, level: 85, color: '#f06292' },
  { name: 'App Development', icon: Database, level: 80, color: '#ffb74d' },
];

export const SERVICES: Service[] = [
  {
    title: 'Custom Theme Development',
    description: 'Bespoke Shopify themes built from scratch using Liquid 2.0 and Tailwind CSS for maximum speed.',
    icon: Layout
  },
  {
    title: 'Headless Commerce',
    description: 'Next-gen storefronts using Hydrogen or Next.js for ultimate flexibility and performance.',
    icon: Zap
  },
  {
    title: 'App Development',
    description: 'Custom private or public apps to extend Shopify functionality tailored to your business needs.',
    icon: Smartphone
  },
  {
    title: 'Store Migration',
    description: 'Seamless migration from WooCommerce, Magento, or BigCommerce to Shopify Plus.',
    icon: Globe
  }
];