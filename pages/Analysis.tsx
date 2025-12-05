import React, { useState } from 'react';
import { ARTICLES } from '../constants';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const Analysis: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-6 py-12">
       <div className="mb-16 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-brand-blue">Investment Analysis</h1>
        <p className="text-xl text-gray-400">
          Observations on the AI Financial Market. Analysis of upstream infrastructure and downstream applications since my arrival in the US.
        </p>
      </div>

      {/* Part 1: Original Analysis */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="w-8 h-1 bg-brand-blue mr-4"></span>
          Deep Dives & Essays
        </h2>
        
        <div className="space-y-6">
          {ARTICLES.map((article) => (
            <div key={article.id} className="bg-white/5 rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all">
              <div 
                className="p-8 cursor-pointer"
                onClick={() => toggleExpand(article.id)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                       <span className="text-sm font-mono text-brand-blue">{article.date}</span>
                       <span className="px-2 py-0.5 rounded text-xs bg-white/10 text-gray-300">{article.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-400">{article.summary}</p>
                  </div>
                  <div className="text-gray-500">
                     {expandedId === article.id ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
              </div>
              
              {/* Expandable Content Area */}
              {expandedId === article.id && (
                <div className="px-8 pb-8 pt-0 border-t border-white/10 mt-4 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="prose prose-invert max-w-none pt-6">
                    <p className="text-lg leading-relaxed text-gray-300">
                      [Placeholder: The full content for "{article.title}" would be loaded here. 
                      This section would contain charts, detailed text analysis regarding {article.category}, 
                      and specific financial data points.]
                    </p>
                    <div className="my-6 p-4 bg-black/30 rounded-lg border-l-4 border-brand-blue">
                      <p className="italic text-gray-400">
                        "The gap between model capability and business utility is closing faster than the market anticipates..."
                      </p>
                    </div>
                    <p className="text-gray-300">
                      Detailed breakdown of NVDA's moat versus potential TPU adoption in inference workloads...
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: Curated Insights */}
      <section>
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <span className="w-8 h-1 bg-brand-orange mr-4"></span>
          Curated Insights & Summaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="p-8 bg-gray-900 rounded-xl border border-white/5">
              <BookOpen className="text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-4">The Information: Key Takeaways</h3>
              <ul className="space-y-3 text-gray-400 list-disc list-inside">
                <li>Agentic workflows reducing SaaS seat counts.</li>
                <li>The rise of vertical AI in legal and medical fields.</li>
                <li>VC funding shift from foundation models to application layer.</li>
              </ul>
              <button className="mt-6 text-brand-orange text-sm font-bold uppercase hover:underline">Read Full Notes</button>
           </div>
           <div className="p-8 bg-gray-900 rounded-xl border border-white/5">
              <BookOpen className="text-brand-orange mb-4" />
              <h3 className="text-xl font-bold mb-4">Sequoia: AI's $600B Question</h3>
              <p className="text-gray-400 mb-4">
                My thoughts on David Cahn's analysis regarding the revenue gap in AI infrastructure build-out.
              </p>
              <button className="mt-6 text-brand-orange text-sm font-bold uppercase hover:underline">Read Full Notes</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Analysis;