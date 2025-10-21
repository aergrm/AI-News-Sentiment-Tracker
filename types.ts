
export enum Sentiment {
  Positive = 'Positive',
  Negative = 'Negative',
  Neutral = 'Neutral',
}

export interface Article {
  title: string;
  summary: string;
  url: string;
  source: string;
  sentiment: Sentiment;
}
