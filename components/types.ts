export interface IBlogPost {
  title: string;
  slug: string;
  publishedDate: string;
}

export interface IFrontMatter {
  publishedAt: string;
  readingTime: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
  slug: string;
  summary: string;
  title: string;
  wordCount: number;
  coverImage: string;
  shareUrl: string;
}
