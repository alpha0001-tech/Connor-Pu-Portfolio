import { NavItem, Project, Article } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Who Am I', path: '/' },
  { label: 'AI Apps & Films', path: '/portfolio' },
  { label: 'Investment Analysis', path: '/investment' },
  { label: 'My AI Manifesto', path: '/manifesto' },
];

export const HERO_CONTENT = {
  name: "Connor Pu",
  tagline: "Bridging AI Technology & Business Strategy",
  intro: "Freshman at Northeastern University. Finance Major, CS Minor. From Shanghai to the US.",
  handwrittenNote: "With the 'Godmother of Silicon Valley' — I'm here!",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Marketing Platform',
    description: 'A collaborative product marketing website built entirely with AI assistance.',
    category: 'Website',
    imageUrl: 'https://picsum.photos/seed/proj1/800/600',
    link: '#',
    date: '2025'
  },
  {
    id: '2',
    title: 'Financial Viz Dashboard',
    description: 'Visualizing financial trends for NVDA, MSFT, and AMZN using AI-generated code based on earnings reports.',
    category: 'App',
    imageUrl: 'https://picsum.photos/seed/proj2/800/600',
    link: '#',
    date: '2025'
  },
  {
    id: '3',
    title: 'OS Clone Experiment',
    description: 'A functional clone of the Mac OS interface running in the browser.',
    category: 'App',
    imageUrl: 'https://picsum.photos/seed/proj3/800/600',
    link: '#',
    date: '2025'
  },
  {
    id: '4',
    title: '3D Physics Particle Sim',
    description: 'Immersive cosmic aesthetic visualization of mathematical formulas.',
    category: 'Simulation',
    imageUrl: 'https://picsum.photos/seed/proj4/800/600',
    link: '#',
    date: '2025'
  },
  {
    id: '5',
    title: 'Gesture Control Christmas Tree',
    description: 'Interactive holiday experience controlled by hand gestures via webcam.',
    category: 'App',
    imageUrl: 'https://picsum.photos/seed/proj5/800/600',
    link: '#',
    date: '2024'
  },
  {
    id: '6',
    title: 'Short Film: "The Awakening"',
    description: 'An AI-generated short film exploring digital consciousness. Created using Runway and Sora tools.',
    category: 'Film',
    imageUrl: 'https://picsum.photos/seed/proj6/800/600',
    link: '#',
    date: '2024'
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The AI Value Chain: Upstream to Downstream',
    summary: 'A deep dive into the technical and commercial layers of the current AI ecosystem.',
    category: 'Tech Layers',
    date: 'Oct 2025'
  },
  {
    id: '2',
    title: 'Market Rivalry: NVDA vs. Google TPUs',
    summary: 'Analyzing the competitive landscape of hardware acceleration in the generative AI era.',
    category: 'Market Analysis',
    date: 'Nov 2025'
  },
  {
    id: '3',
    title: 'Is AI a Bubble? A Freshman\'s Perspective',
    summary: 'Examining historical market patterns to predict the sustainability of current AI valuations.',
    category: 'Market Analysis',
    date: 'Dec 2025'
  },
];

export const MANIFESTO_INTRO = `
This is not just about code. It's about a new era of creation.
My journey started not with a text prompt, but with a vision of cinema democratized by Sora.
From 2018's LLMs to the multi-modal reality of 2025, I stand at the intersection of technology and commerce.
This is my declaration.
`;