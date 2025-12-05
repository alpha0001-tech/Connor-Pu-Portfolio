export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'App' | 'Film' | 'Simulation' | 'Website';
  imageUrl: string;
  link: string;
  date: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  content?: string; // Full content for the detail view
  category: 'Market Analysis' | 'Tech Layers' | 'Curated';
  date: string;
}

export interface NavItem {
  label: string;
  path: string;
}