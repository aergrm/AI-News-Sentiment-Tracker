
import React from 'react';
import { AILogoIcon } from './icons';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 px-4 border-b border-gray-700">
        <div className="flex items-center justify-center gap-4 mb-2">
            <AILogoIcon className="w-12 h-12 text-cyan-400" />
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-200 to-cyan-400 text-transparent bg-clip-text">
                AI News Sentiment Tracker
            </h1>
        </div>
      <p className="max-w-2xl mx-auto text-lg text-gray-400 mt-2">
        Your daily digest of AI news, analyzed and visualized. See the bigger picture of how the world perceives Artificial Intelligence.
      </p>
    </header>
  );
};

export default Header;
