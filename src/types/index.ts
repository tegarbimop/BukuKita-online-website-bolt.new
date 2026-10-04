export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  rating: number;
  category: CategoryName;
  coverFrom: string;
  coverTo: string;
  description: string;
  longDescription?: string;
  publisher?: string;
  yearPublished?: number;
  pageCount?: number;
  language?: string;
  isbn?: string;
  reviewCount?: number;
  stock?: number;
}

export type CategoryName =
  | 'Novel'
  | 'Pendidikan'
  | 'Teknologi'
  | 'Bisnis'
  | 'Agama'
  | 'Pengembangan Diri';

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface Review {
  id: number;
  bookId: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export type Page = 'home' | 'detail';

export interface RatingDistribution {
  star: number;
  count: number;
  percentage: number;
}
