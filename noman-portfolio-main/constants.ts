import { Project, ExperienceItem, Skill, Service } from './types';
import { ShoppingBag, Layout, Smartphone, Zap, Code, BarChart3, Globe, Database } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
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
  },
  {
    id: '7',
    title: 'Pet Zone',
    category: 'Dropshipping Store',
    image: '/petzone.png',
    video: '/petzone.mp4',
    isLive: true,
    description: 'A high-performance Shopify dropshipping store built on premium theme. Features exclusive design concept for pet products.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'User-friendly Design', "Premium Theme", "Pet Products", "Ecommerce", "Dropshipping" ],
    stats: [{ label: 'Performance', value: '96/100' }, { label: 'Conversion', value: '+57%' }],
    link: '#'
  },
  {
    id: '8',
    title: 'My Choice',
    category: 'Print on Demand Store',
    image: '/mychoice.png',
    video: '/mychoice.mp4',
    isLive: true,
    description: 'A high-performance Shopify Print on Demand store built on premium theme. Features exclusive design concept for pet products.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'User-friendly Design', "Premium Theme", "Lifestyle Products", "Ecommerce", "Print on Demand", "POD", ],
    stats: [{ label: 'Performance', value: '89/100' }, { label: 'Conversion', value: '+51%' }],
    link: '#'
  },
  {
    id: '9',
    title: 'Electro',
    category: 'Single Product Store',
    image: '/Electro.png',
    video: '/Electro.mp4',
    isLive: true,
    description: 'A high-performance Shopify single product dropshipping store built on premium theme. Features exclusive design concept for pet products.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'User-friendly Design', "Premium Theme", "Massage Gun Product", "Ecommerce", "Single Product", "Single Product Store", ],
    stats: [{ label: 'Performance', value: '89/100' }, { label: 'Conversion', value: '+51%' }],
    link: '#'
  },
  {
    id: '10',
    title: 'Travel Bag',
    category: 'Multi Product Store',
    image: '/travelbag.png',
    video: '/travelbag.mp4',
    isLive: true,
    description: 'A high-performance Shopify dropshipping store built on premium theme. Features exclusive design concept for pet products.',
    tags: ['Liquid', 'Css', 'Javascript', 'Client Transfer', 'User-friendly Design', "Premium Theme", "Travel", "Ecommerce", "Multi Product", "Multi Product Store", ],
    stats: [{ label: 'Performance', value: '93/100' }, { label: 'Conversion', value: '+57%' }],
    link: '#'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Shopify Store Management (VA)',
    company: 'Tactech',
    period: '2024 - Present',
    description: 'Shopify-focused eCommerce professional with deep experience in Shopify Plus store management, including product listings, collections architecture, SEO optimization, app integrations, theme updates, and operational workflows. Skilled in ensuring fast performance, accurate catalog management, and smooth order/returns processing to deliver a seamless customer experience.',
    technologies: ['Shopify Plus', 'Liquid', 'CSS', 'Javascript', "Shopify Apps", "SEO", "Product Management", "Order Management", "Customer Service", "Ecommerce Operations"]
  },
  {
    id: '2',
    role: 'Shopify Store Designer & Developer',
    company: 'Nova Creations',
    period: '2022 - 2024',
    description: 'Expert Shopify Store Designer & Developer with hands-on experience in custom theme design, Liquid coding, and responsive UI/UX. Skilled in creating Print on Demand, Dropshipping, eBook, single-product, and multi-product stores, including product listings, collections, SEO, app integrations, and full store setup. Dedicated to building high-performing, visually appealing, and fully functional Shopify stores that enhance user experience and drive sales.',
    technologies: ['Print-on-demand', 'ebook', 'Dropshipping', "Single-product", "Multi-product", "UI/UX Design", "Liquid", "Shopify Apps", "SEO", "Responsive Design"]
  },
  {
    id: '3',
    role: 'Amazon Virtual Assistant(PL)',
    company: 'Freelance',
    period: '2021 - 2022',
    description: 'Amazon Virtual Assistant from Enablers with expertise in product listings, Amazon SEO, inventory management, and seller account operations.',
    technologies: ['Amazon', 'Virtual Assistant', 'Private Label', 'Product Listings', 'Inventory Management', 'SEO', 'Customer Service', 'Ecommerce Operations']
  },
  {
    id: '4',
    role: 'Frontend Designer & Developer (UI/UX)',
    company: 'Ozient Technologies',
    period: '2019 - 2021',
    description: 'Creative and detail-oriented Frontend Designer & UI/UX Developer with expertise in designing responsive, user-friendly websites using HTML, CSS, Bootstrap, JavaScript, and jQuery. Experienced in translating UI/UX designs into clean, efficient code while ensuring cross-browser compatibility, mobile responsiveness, and fast loading performance.',
    technologies: ['Themeforest', 'UI/UX Design', 'TemplateMonster', 'Mobile Responsive Design', 'User Experience', 'Multi-purpose Layouts', 'Clean Code', 'Multi-browser Compatibility']
  },
  {
    id: '5',
    role: 'DotNet Designer & Developer (Intern)',
    company: 'Express Software Solutions',
    period: '2018 - 2019',
    description: 'Intern DotNet Designer & Developer with hands-on experience in designing and developing web applications using ASP.NET, C#, and SQL.',
    technologies: ['.net', 'UI/UX Design', 'Mobile Responsive Design', 'User Experience', 'Frontend Design', 'Clean Code', ' MySQL', "Html", "Css", "Javascript" ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Shopify Liquid', icon: Code, level: 90, color: '#96bf48' },
  { name: 'React / Tailwind CSS', icon: Zap, level: 80, color: '#61dafb' },
  { name: 'UX/UI Design', icon: Layout, level: 95, color: '#f06292' },
  { name: 'Ecommerce Management', icon: Database, level: 88, color: '#ffb74d' },
];

export const SERVICES: Service[] = [
  {
    title: 'Custom Theme Development & Design',
    description: 'Bespoke Shopify themes built from scratch using Liquid 2.0 and Tailwind CSS for maximum speed.',
    icon: Layout
  },
  {
    title: 'Custom Sections & Blocks',
    description: 'Custom Liquid section with block-based content for easy editing in the theme editor.',
    icon: Zap
  },
  {
    title: 'Speed Optimization',
    description: 'Enhance website loading time through professional speed optimization techniques.',
    icon: Smartphone
  },
  {
    title: 'App Integrations',
    description: 'Add essential apps to improve functionality, automation, and customer experience.',
    icon: Globe
  }
];