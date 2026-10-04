import { X, ShoppingCart, Star, Plus, Minus } from 'lucide-react';
import type { Book } from '@/types';
import { formatPrice } from '@/data/books';
import { BookCover } from './BookCover';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  onAddToCart: (book: Book) => void;
}

export function BookDetailModal({ book, onClose, onAddToCart }: BookDetailModalProps) {
  if (!book) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors shadow-sm"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid sm:grid-cols-2 gap-6 p-6">
              {/* Cover */}
              <div className="flex justify-center">
                <div className="w-full max-w-[200px]">
                  <BookCover book={book} size="lg" />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 inline-block px-2.5 py-1 rounded-full w-fit">
                  {book.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 mt-3">{book.title}</h2>
                <p className="text-sm text-gray-500 mt-1">oleh {book.author}</p>

                <div className="flex items-center gap-1 mt-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= Math.floor(book.rating)
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold text-gray-700 ml-1">{book.rating}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mt-4">{book.description}</p>

                <div className="mt-auto pt-4">
                  <p className="text-2xl font-bold text-blue-700">{formatPrice(book.price)}</p>
                  <button
                    onClick={() => {
                      onAddToCart(book);
                      onClose();
                    }}
                    className="w-full mt-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
