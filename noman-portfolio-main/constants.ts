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
    title: 'Color Pops',
    category: 'Shopify Store',
    image: '/colouredpops-myshopify.png',
    video: '/colouredpops-myshopify.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design sections and product filters and a dynamic shopping experience.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', "Ecommerce", "Cosmetics", "Beauty", "Skincare", "Makeup" ],
    stats: [{ label: 'Performance', value: '99/100' }, { label: 'Conversion', value: '+45%' }],
    link: '#'
  },
  {
    id: '2',
    title: 'Parisha Wong',
    category: 'Custom Theme Dev',
    image: '/parishawong-myshopify.png',
    video: '/parishawong-myshopify.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design and custom sections.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', 'SEO', "Custom Sections", "Ecommerce", "Fashion", "Bags" ],
    stats: [{ label: 'Performance', value: '94/100' }, { label: 'Conversion', value: '+50%' }],
    link: '#'
  },
  {
    id: '3',
    title: 'Power Gym',
    category: 'Custom Theme Dev',
    image: '/pw-gym-myshopify.png',
    video: '/pw-gym-myshopify.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design and custom sections.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', 'SEO', "Custom Sections", "Ecommerce", "Fitness", "Gym" ],
    stats: [{ label: 'Performance', value: '97/100' }, { label: 'Conversion', value: '+48%' }],
    link: '#'
  },
  {
    id: '4',
    title: 'Traditional Women Fashion Store',
    category: 'UX/UI Redesign',
    image: '/traditional fashion store.png',
    video: '/traditional fashion store.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design and custom sections.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', 'SEO', "Custom Sections", "Custom Blocks", "Women Fashion", "Ecommerce" ],
    stats: [{ label: 'Performance', value: '92/100' }, { label: 'Conversion', value: '+58%' }],
    link: '#'
  },
  {
    id: '5',
    title: 'WUNDERKIND',
    category: 'UX/UI Redesign',
    image: '/WUNDERKIND GOODs 1.png',
    video: '/WUNDERKIND GOODs 2.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design and custom sections.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', 'Custom Dividers', "Custom Sections", "Custom Blocks", "Photography", "Portfolio" ],
    stats: [{ label: 'Performance', value: '99/100' }, { label: 'Conversion', value: '+53%' }],
    link: '#'
  },
  {
    id: '6',
    title: 'Kerry Allen',
    category: 'UX/UI Redesign',
    image: '/kerry-allen.png',
    video: '/kerry-allen.mp4',
    isLive: true,
    description: 'A high-performance Shopify store built with Liquid and Javascript. Features custom design and custom sections.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'Custom Design', 'Custom Dividers', "Custom Sections", "Custom Blocks", "Women Fashion", "Ecommerce" ],
    stats: [{ label: 'Performance', value: '96/100' }, { label: 'Conversion', value: '+57%' }],
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