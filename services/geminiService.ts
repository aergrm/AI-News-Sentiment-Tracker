
import { GoogleGenAI, Type } from "@google/genai";
import { Article, Sentiment } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const newsSchema = {
    type: Type.ARRAY,
    items: {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING, description: "The headline of the news article." },
        summary: { type: Type.STRING, description: "A concise, one-sentence summary of the article." },
        url: { type: Type.STRING, description: "The direct URL to the original article." },
        source: { type: Type.STRING, description: "The name of the news publication or source (e.g., 'TechCrunch', 'Reuters')." },
        sentiment: {
          type: Type.STRING,
          enum: [Sentiment.Positive, Sentiment.Negative, Sentiment.Neutral],
          description: "The overall sentiment of the article regarding Artificial Intelligence."
        },
      },
      required: ["title", "summary", "url", "source", "sentiment"],
    },
};

export const fetchAndAnalyzeNews = async (): Promise<Article[]> => {
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-pro",
        contents: "Find the top 8 most recent and significant news articles about Artificial Intelligence from major global news and tech sources published in the last 24 hours. For each article, provide the title, a one-sentence summary, the source publication name, the original URL, and a sentiment analysis of the article's tone towards AI. The sentiment must be one of: 'Positive', 'Negative', or 'Neutral'.",
        config: {
            responseMimeType: "application/json",
            responseSchema: newsSchema,
            temperature: 0.5,
        },
    });

    const jsonText = response.text.trim();
    const articles = JSON.parse(jsonText);

    // Validate the structure of the returned data.
    if (!Array.isArray(articles)) {
        throw new Error("API did not return an array of articles.");
    }

    return articles.filter(article => 
        article.title && article.url && article.sentiment
    ) as Article[];

  } catch (error) {
    console.error("Error fetching or parsing news from Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get news from Gemini: ${error.message}`);
    }
    throw new Error("An unknown error occurred while fetching news.");
  }
};
