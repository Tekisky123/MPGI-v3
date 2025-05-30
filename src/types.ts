export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  eligibility: string;
  fees: string;
  career: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  content: string;
  link?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon: string;
  images: string[];
}

export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category: 'news' | 'event';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  batch: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}