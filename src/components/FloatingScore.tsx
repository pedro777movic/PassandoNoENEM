import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

const FloatingScore: React.FC = () => {
  const [score, setScore] = useState(450);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      // Show after scrolling 20% of the page
      if (scrollPercentage >= 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate score based on scroll progress (450 to 850)
      const minScore = 450;
      const maxScore = 850;
      const progressScore = minScore + ((maxScore - minScore) * (scrollPercentage / 100));
      setScore(Math.min(Math.round(progressScore), maxScore));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-4 py-2 shadow-lg">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <div className="text-center">
          <div className="text-xs text-gray-300">Sua Nota ENEM</div>
          <div className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">
            {score}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingScore;