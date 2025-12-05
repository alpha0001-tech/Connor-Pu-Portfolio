import React from 'react';
import { MANIFESTO_INTRO } from '../constants';

const Manifesto: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-white text-brand-black">
      {/* Light Theme for Manifesto to resemble a document/paper */}
      
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="mb-12 border-b-2 border-brand-black pb-8">
           <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Connor Pu • 2025</span>
           <h1 className="text-6xl md:text-8xl font-serif font-bold mt-4 tracking-tighter">
             MY AI DECLARATION
           </h1>
        </div>

        <div className="prose prose-xl prose-stone max-w-none">
          <p className="lead text-2xl font-serif italic text-gray-700 mb-10">
            {MANIFESTO_INTRO}
          </p>

          <h2 className="font-bold text-brand-orange">The Shift</h2>
          <p>
            We are no longer just users; we are directors. The barrier to entry for creation—be it code, film, or enterprise software—has collapsed. 
            My generation is the first to grow up not just with the internet, but with intelligence on tap.
          </p>

          <h2 className="font-bold text-brand-orange">My Position</h2>
          <p>
            I am a student of Finance and Computer Science. But these are just labels. 
            My true role is a bridge. I speak the language of liquidity and the language of latent space. 
            While others debate whether AI is a bubble, I am building the tools to navigate it.
          </p>

          <h2 className="font-bold text-brand-orange">The Future</h2>
          <p>
            I envision a future where the "Solopreneur" can rival the Fortune 500. 
            Where autonomous agents handle the operations, and human creativity provides the strategic spark.
            My goal is to apply my understanding of the AI value chain to build, invest in, and guide the next generation of startups.
          </p>
          
          <div className="mt-16 p-8 bg-gray-100 border-l-4 border-brand-black">
            <p className="font-serif text-lg">
              "I am not here to watch the wave. I am here to surf it."
            </p>
            <p className="mt-4 font-bold text-right">— Connor Pu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manifesto;