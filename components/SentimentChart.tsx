
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Article, Sentiment } from '../types';

interface SentimentChartProps {
  articles: Article[];
}

const COLORS = {
  [Sentiment.Positive]: '#22c55e', // green-500
  [Sentiment.Negative]: '#ef4444', // red-500
  [Sentiment.Neutral]: '#a1a1aa', // zinc-400
};

const SentimentChart: React.FC<SentimentChartProps> = ({ articles }) => {
  const sentimentCounts = articles.reduce((acc, article) => {
    acc[article.sentiment] = (acc[article.sentiment] || 0) + 1;
    return acc;
  }, {} as Record<Sentiment, number>);

  const data = Object.entries(sentimentCounts).map(([name, value]) => ({
    name: name as Sentiment,
    value,
  }));

  if (data.length === 0) {
    return (
        <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg text-gray-500">
            No sentiment data available. Fetch news to see the analysis.
        </div>
    );
  }

  return (
    <div className="w-full h-80 bg-gray-800 p-4 rounded-lg shadow-inner">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            nameKey="name"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry) => (
              <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name]} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
                backgroundColor: '#2D2D2D', 
                borderColor: '#3D3D3D',
                color: '#E5E7EB'
            }}
            cursor={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          />
          <Legend iconType="circle" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentChart;
