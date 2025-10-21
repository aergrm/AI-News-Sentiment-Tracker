
import React, { useState, useCallback } from 'react';
import { Article } from './types';
import { fetchAndAnalyzeNews } from './services/geminiService';
import Header from './components/Header';
import NewsCard from './components/NewsCard';
import SentimentChart from './components/SentimentChart';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchNews = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    setArticles([]);
    try {
      const fetchedArticles = await fetchAndAnalyzeNews();
      setArticles(fetchedArticles);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <button
            onClick={handleFetchNews}
            disabled={isLoading}
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? 'Analyzing...' : "Fetch Today's AI News"}
          </button>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-500/60 text-red-300 px-4 py-3 rounded-lg text-center my-4">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}

        {isLoading && <Loader />}
        
        {!isLoading && articles.length > 0 && (
          <div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4 text-gray-300">Sentiment Overview</h2>
                <SentimentChart articles={articles} />
            </div>

            <div>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-300">Latest Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {articles.map((article, index) => (
                    <NewsCard key={index} article={article} />
                ))}
                </div>
            </div>
          </div>
        )}

        {!isLoading && !error && articles.length === 0 && (
            <div className="text-center py-16 text-gray-500">
                <p className="text-xl">Welcome to the AI News Tracker.</p>
                <p>Click the button above to get the latest AI news and its sentiment analysis.</p>
            </div>
        )}
      </main>
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        <p>Powered by Google Gemini</p>
      </footer>
    </div>
  );
};

export default App;
