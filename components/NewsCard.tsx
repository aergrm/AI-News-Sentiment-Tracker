
import React from 'react';
import { Article, Sentiment } from '../types';
import { ThumbsUpIcon, ThumbsDownIcon, MinusCircleIcon } from './icons';

interface NewsCardProps {
  article: Article;
}

const sentimentConfig = {
  [Sentiment.Positive]: {
    bgColor: 'bg-green-900/50',
    borderColor: 'border-green-500/60',
    textColor: 'text-green-400',
    icon: <ThumbsUpIcon className="w-5 h-5" />,
    label: 'Positive',
  },
  [Sentiment.Negative]: {
    bgColor: 'bg-red-900/50',
    borderColor: 'border-red-500/60',
    textColor: 'text-red-400',
    icon: <ThumbsDownIcon className="w-5 h-5" />,
    label: 'Negative',
  },
  [Sentiment.Neutral]: {
    bgColor: 'bg-gray-700/50',
    borderColor: 'border-gray-500/60',
    textColor: 'text-gray-400',
    icon: <MinusCircleIcon className="w-5 h-5" />,
    label: 'Neutral',
  },
};

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const config = sentimentConfig[article.sentiment] || sentimentConfig[Sentiment.Neutral];

  return (
    <div className={`
      bg-gray-800 border ${config.borderColor} rounded-lg shadow-lg 
      overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20
    `}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-wider">{article.source}</span>
          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${config.bgColor} ${config.textColor}`}>
            {config.icon}
            <span>{config.label}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-100 mb-2 hover:text-cyan-400 transition-colors duration-200">
            <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {article.summary}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
