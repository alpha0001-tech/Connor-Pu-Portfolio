import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Analysis from './pages/Analysis';
import Manifesto from './pages/Manifesto';

/**
 * CONNOR PU PORTFOLIO SITE
 * 
 * DESIGN NOTES FOR THE USER:
 * 1. I have implemented the "Hand Drawn" arrow effect in the Hero section of Home.tsx using SVG.
 * 2. The Resume and Speech videos are placeholders. You need to provide the actual YouTube Embed URLs or file paths.
 * 3. The Article content in 'Analysis.tsx' is currently filler text. You will need to copy-paste your full articles there.
 * 4. Images are currently using "picsum.photos" placeholders. You will need to replace these URLs with your uploaded assets.
 */

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="investment" element={<Analysis />} />
          <Route path="manifesto" element={<Manifesto />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;