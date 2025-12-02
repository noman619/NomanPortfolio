import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  video?: string;
  isLive?: boolean;
  description: string;
  tags: string[];
  link?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number; // 0-100
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}