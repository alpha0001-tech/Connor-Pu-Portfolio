import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, TrendingUp, Cpu, Mic2 } from 'lucide-react';
import { HERO_CONTENT, PROJECTS, ARTICLES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 space-y-6 z-10">
            <div className="inline-block px-3 py-1 border border-brand-orange/50 rounded-full text-brand-orange text-xs font-bold tracking-widest uppercase mb-2">
              Northeastern University '29
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                {HERO_CONTENT.name}
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
              {HERO_CONTENT.intro} <br/>
              <span className="text-brand-orange font-medium">Interest:</span> {HERO_CONTENT.tagline}
            </p>
            
            <div className="pt-8">
               <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">My Journey Started Here</p>
               <div className="flex flex-wrap gap-4">
                 <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <TrendingUp size={16} className="text-blue-400" />
                    <span className="text-sm">Finance Major</span>
                 </div>
                 <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                    <Cpu size={16} className="text-brand-orange" />
                    <span className="text-sm">CS Minor</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Hero Image with Annotation */}
          <div className="order-1 md:order-2 relative flex justify-center z-10">
            <div className="relative group w-full max-w-[550px]">
              {/* Photo Container - Landscape Aspect Ratio for group photo */}
              <div className="aspect-[4/3] bg-gray-800 rounded-lg overflow-hidden shadow-2xl relative border border-white/10">
                 <img 
                   src="./connor_godmother.jpg" 
                   alt="Connor with Silicon Valley Godmother" 
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                 />
              </div>

              {/* Hand Drawn Elements (SVG Overlay) */}
              <div className="absolute inset-0 pointer-events-none">
                {/* 
                  Adjusted ViewBox to 500x375 to match approx 4:3 aspect ratio.
                  Coordinates for the circle shifted to highlight the person on the right.
                */}
                <svg className="absolute w-full h-full" viewBox="0 0 500 375">
                  <path 
                    d="M 280 120 Q 380 90 420 160 Q 430 260 360 280 Q 270 260 280 120" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeDasharray="10,5"
                    className="opacity-90 drop-shadow-lg animate-pulse"
                  />
                  {/* Arrow pointing to the circle */}
                  <path 
                    d="M 450 60 Q 440 100 420 130" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="3"
                    markerEnd="url(#arrowhead)"
                  />
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                    </marker>
                  </defs>
                  
                  {/* Handwritten Text */}
                  <text x="380" y="50" fill="white" fontSize="18" className="hand-drawn-text font-bold" style={{textShadow: '2px 2px 4px black'}}>
                    I'm Here!
                  </text>
                  <text x="20" y="350" fill="white" fontSize="14" className="hand-drawn-text bg-black/50 px-2" style={{textShadow: '2px 2px 4px black'}}>
                    with Silicon Valley Godmother
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* WHY AI? (Bio Extension) */}
      <section className="py-24 bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl font-serif font-bold mb-8">Why I Choose AI</h2>
           <div className="prose prose-invert prose-lg text-gray-300">
             <p className="mb-6">
               It wasn't ChatGPT that sparked my fire—it was <span className="text-brand-orange font-bold">Sora</span> in early 2024.
             </p>
             <p className="mb-6">
               I love cinema. I realized that the once distant dream of filmmaking was now accessible from my laptop. 
               This realization triggered a deeper curiosity: if video generation is maturing this fast, what does the business landscape look like?
             </p>
             <p>
               From the evolution of LLMs in 2018 to the multi-modal intelligence of 2025, I began analyzing the upstream (compute, models) and downstream (apps, services) of the AI industry. This fusion of technology and financial analysis defines who I am today.
             </p>
           </div>
        </div>
      </section>

      {/* PREVIEW SECTIONS */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-6">
          
          {/* 1. Apps/Films Preview */}
          <div className="mb-32">
            <div className="flex justify-between items-end mb-12">
               <div>
                 <span className="text-brand-orange tracking-widest text-sm font-bold uppercase">Portfolio</span>
                 <h2 className="text-4xl font-serif font-bold mt-2">AI Apps & Films</h2>
               </div>
               <Link to="/portfolio" className="hidden md:flex items-center text-white hover:text-brand-orange transition-colors group">
                 View All Projects <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROJECTS.slice(0, 3).map((proj) => (
                <Link to="/portfolio" key={proj.id} className="group block bg-gray-900 rounded-xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-brand-blue font-bold uppercase">{proj.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-brand-orange transition-colors">{proj.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{proj.description}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
                <Link to="/portfolio" className="inline-flex items-center text-brand-orange font-bold">See More <ArrowRight className="ml-2" size={16}/></Link>
            </div>
          </div>

          {/* 2. Investments Preview */}
          <div className="mb-32">
             <div className="flex justify-between items-end mb-12">
               <div>
                 <span className="text-brand-blue tracking-widest text-sm font-bold uppercase">Analysis</span>
                 <h2 className="text-4xl font-serif font-bold mt-2">Market Insights</h2>
               </div>
               <Link to="/investment" className="hidden md:flex items-center text-white hover:text-brand-blue transition-colors group">
                 Read All Articles <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
            <div className="space-y-6">
              {ARTICLES.slice(0, 2).map((article) => (
                <Link to="/investment" key={article.id} className="block p-8 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/5 hover:border-brand-blue/30 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-xs font-bold text-gray-500">{article.date}</span>
                        <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                        <span className="text-xs font-bold text-brand-blue uppercase">{article.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">{article.title}</h3>
                      <p className="text-gray-400 max-w-2xl">{article.summary}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:border-transparent transition-all">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* 3. Manifesto Teaser */}
          <div className="relative rounded-3xl overflow-hidden bg-brand-orange p-12 text-center">
             <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">The Future is Agentic.</h2>
               <p className="text-white/90 text-lg mb-8">
                 Read my full declaration on how I position myself in the age of Artificial Intelligence.
               </p>
               <Link to="/manifesto" className="inline-block px-8 py-3 bg-white text-brand-orange font-bold rounded-full hover:bg-black hover:text-white transition-colors">
                 Read My Manifesto
               </Link>
             </div>
          </div>

        </div>
      </section>

      {/* RESUME & SPEECH SECTION */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Speech */}
            <div className="flex-1">
               <div className="flex items-center space-x-3 mb-6">
                  <Mic2 className="text-brand-orange" />
                  <h3 className="text-2xl font-bold">High School Valedictorian Speech</h3>
               </div>
               <div className="aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center relative group cursor-pointer">
                  {/* Placeholder for Video Embed */}
                  <img src="https://picsum.photos/seed/speech/800/450" alt="Speech Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent"></div>
                    </div>
                  </div>
               </div>
               <p className="mt-4 text-gray-400 text-sm">
                 The first student speaker. 10 minutes, unscripted. Discussing the dawn of the AI era and our responsibility.
               </p>
            </div>

            {/* Resume/Events */}
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl font-bold mb-6">Events & Milestones</h3>
              <ul className="space-y-4">
                {[
                  "Berkeley 2025 AI Investment Summit",
                  "Valley 101 AI Summit",
                  "AI Agent Discussion Panel @ Harvard Business School",
                  "Arrived in US - Sept 2025"
                ].map((event, idx) => (
                  <li key={idx} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/5">
                    <div className="w-2 h-2 mt-2 bg-brand-orange rounded-full"></div>
                    <span className="text-gray-300 font-medium">{event}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                 <button className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white hover:text-black transition-colors text-sm font-bold uppercase tracking-wider w-full md:w-auto">
                   Download Resume
                 </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">In The Field</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className={`rounded-xl overflow-hidden bg-gray-800 ${i === 1 || i === 8 ? 'col-span-2 row-span-2' : ''}`}>
                <img 
                  src={`https://picsum.photos/seed/gallery${i}/600/600`} 
                  alt="Event" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;