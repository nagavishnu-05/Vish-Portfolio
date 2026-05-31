import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ui/ScrollToTop';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PageTransition from './components/layout/PageTransition';

// Pages
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificatesPage from './pages/CertificatesPage';
import CodingStatsPage from './pages/CodingStatsPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-background text-foreground relative transition-colors duration-300">
        <Navbar />
        <main className="flex-grow pt-16 mt-4 md:mt-8 relative z-10 max-w-screen-2xl mx-auto w-full px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
              <Route path="/skills" element={<PageTransition><SkillsPage /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><ExperiencePage /></PageTransition>} />
              <Route path="/certificates" element={<PageTransition><CertificatesPage /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
              <Route path="/coding-stats" element={<PageTransition><CodingStatsPage /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
