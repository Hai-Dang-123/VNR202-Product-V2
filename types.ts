
export interface QuizItem {
  id: number;
  hint: string;
  imageUrl: string;
  answer: string;
  chapter: string;
  // Optional extra information about the keyword/answer that can be shown on demand
  keywordInfo?: string;
}
