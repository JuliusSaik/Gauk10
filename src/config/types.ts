export interface QACard {
  id: number;
  question: string;
  answer: string;
}

export interface CreateQACard {
  question: string;
  answer: string;
}

export interface FlashCardSet {
  id: number;
  icon: number;
  title: string;
  description: string;
  progress: number;
  date: string;
}

export interface CreateFlashCardSet {
  title: string;
  description: string;
  progress: number;
  date: string;
  flashcards: CreateQACard[];
}
