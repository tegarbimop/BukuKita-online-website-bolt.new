import { Star, ShoppingCart, Eye } from 'lucide-react';
import type { Book } from '@/types';
import { formatPrice } from '@/data/books';
import { BookCover } from './BookCover';

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
  onDetail: (book: Book) => void;
}

export function BookCard({ book, onAddToCart, onDetail }: BookCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-blue-200 flex flex-col">
      <div
        className="relative cursor-pointer p-4 pb-2"
        onClick={() => onDetail(book)}
      >
        <BookCover book={book} size="md" />
        <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 flex items-center gap-0.5 shadow-sm">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-gray-700">{book.rating}</span>
        </div>
      </div>

      <div className="px-4 pb-4 flex flex-col flex-1">
        <h3
          className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-blue-700 transition-colors"
          onClick={() => onDetail(book)}
        >
          {book.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{book.author}</p>
        <p className="text-lg font-bold text-blue-700 mt-2">{formatPrice(book.price)}</p>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onAddToCart(book)}
            className="flex-1 bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Keranjang
          </button>
          <button
            onClick={() => onDetail(book)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Lihat detail"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
