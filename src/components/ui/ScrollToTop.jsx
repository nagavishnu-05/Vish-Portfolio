import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    showScrollTop && (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        onClick={scrollToTop}
        className="fixed bottom-12 right-12 p-4 rounded-2xl bg-primary text-white shadow-2xl z-50 hover:bg-primary/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronRight size={24} className="-rotate-90" />
      </motion.button>
    )
  );
}
