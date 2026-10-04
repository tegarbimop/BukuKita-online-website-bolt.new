import { useState } from 'react';
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  Zap,
  Truck,
  Package,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';
import type { Book, CartItem } from '@/types';
import { formatPrice } from '@/data/books';
import { BookCover } from './BookCover';
import { Breadcrumb } from './Breadcrumb';
import { RatingReviews } from './RatingReviews';

interface BookDetailPageProps {
  book: Book;
  recommendations: Book[];
  reviews: ReturnType<typeof import('@/data/books').getReviewsByBookId>;
  distribution: ReturnType<typeof import('@/data/books').getRatingDistribution>;
  onAddToCart: (book: Book, quantity: number) => void;
  onBuyNow: (book: Book, quantity: number) => void;
  onNavigateHome: () => void;
  onNavigateBooks: () => void;
  onNavigateBook: (book: Book) => void;
}

export function BookDetailPage({
  book,
  recommendations,
  reviews,
  distribution,
  onAddToCart,
  onBuyNow,
  onNavigateHome,
  onNavigateBooks,
  onNavigateBook,
}: BookDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => q + 1);

  const specs: { label: string; value: string }[] = [
    { label: 'Penulis', value: book.author },
    { label: 'Penerbit', value: book.publisher ?? '-' },
    { label: 'Tahun Terbit', value: String(book.yearPublished ?? '-') },
    { label: 'Jumlah Halaman', value: `${book.pageCount ?? '-'} halaman` },
    { label: 'Bahasa', value: book.language ?? '-' },
    { label: 'ISBN', value: book.isbn ?? '-' },
    { label: 'Kategori', value: book.category },
  ];

  return (
    <div>
      <Breadcrumb
        book={book}
        onNavigateHome={onNavigateHome}
        onNavigateBooks={onNavigateBooks}
      />

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={onNavigateBooks}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </button>
      </div>

      {/* Product Detail */}
      <section className="py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Cover */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-sm group">
                <div className="transition-transform duration-200 group-hover:scale-[1.02]">
                  <BookCover book={book} size="xl" />
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-2 mt-4">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-14 h-18 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${
                      i === 0 ? 'border-blue-600' : 'border-gray-200 hover:border-blue-300'
                    }`}
                    style={{
                      background: i === 0
                        ? `linear-gradient(145deg, ${book.coverFrom}, ${book.coverTo})`
                        : `linear-gradient(145deg, ${book.coverFrom}99, ${book.coverTo}99)`,
                    }}
                  >
                    <div className="h-full flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white/60" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 inline-block px-2.5 py-1 rounded-full w-fit">
                {book.category}
              </span>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-3">{book.title}</h1>
              <p className="text-gray-500 mt-1">oleh {book.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-0.5">
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
                </div>
                <span className="text-sm font-semibold text-gray-700">{book.rating}</span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-500">
                  {(book.reviewCount ?? 0).toLocaleString('id-ID')} ulasan
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 pb-5 border-b border-gray-100">
                <p className="text-3xl font-bold text-blue-700">{formatPrice(book.price)}</p>
                <div className="flex items-center gap-2 mt-2">
                  {book.stock && book.stock > 0 ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-medium text-emerald-600">Stok tersedia</span>
                      <span className="text-sm text-gray-400">({book.stock} buku)</span>
                    </>
                  ) : (
                    <span className="text-sm font-medium text-red-500">Stok habis</span>
                  )}
                </div>
              </div>

              {/* Short description */}
              <p className="text-sm text-gray-600 leading-relaxed mt-4">{book.description}</p>

              {/* Book info quick facts */}
              <div className="grid grid-cols-2 gap-3 mt-5 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">Penerbit:</span>
                  <span className="font-medium">{book.publisher}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">Tahun:</span>
                  <span className="font-medium">{book.yearPublished}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">Halaman:</span>
                  <span className="font-medium">{book.pageCount}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-gray-400">Bahasa:</span>
                  <span className="font-medium">{book.language}</span>
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700 mb-2 block">Jumlah</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-1">
                    <button
                      onClick={decrease}
                      disabled={quantity <= 1}
                      className="p-2 text-gray-500 hover:text-blue-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Kurangi"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-base font-semibold w-8 text-center">{quantity}</span>
                    <button
                      onClick={increase}
                      className="p-2 text-gray-500 hover:text-blue-700 transition-colors"
                      aria-label="Tambah"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    Subtotal: <span className="font-semibold text-gray-900">{formatPrice(book.price * quantity)}</span>
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => onAddToCart(book, quantity)}
                  className="flex-1 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
                <button
                  onClick={() => onBuyNow(book, quantity)}
                  className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Beli Sekarang
                </button>
              </div>

              {/* Shipping info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                <div className="flex items-start gap-2.5 bg-gray-50 rounded-lg p-3">
                  <Truck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Pengiriman</p>
                    <p className="text-xs text-gray-500 mt-0.5">Dikirim ke alamat rumahmu</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-gray-50 rounded-lg p-3">
                  <Package className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Estimasi</p>
                    <p className="text-xs text-gray-500 mt-0.5">2-5 hari kerja</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 bg-gray-50 rounded-lg p-3">
                  <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Pembayaran</p>
                    <p className="text-xs text-gray-500 mt-0.5">Aman dan mudah</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Deskripsi Buku</h2>
          <div className="bg-white rounded-xl p-6">
            <p
              className={`text-sm text-gray-600 leading-relaxed ${
                showFullDesc ? '' : 'line-clamp-4'
              }`}
            >
              {book.longDescription ?? book.description}
            </p>
            <button
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="flex items-center gap-1 text-sm font-semibold text-blue-700 mt-3 hover:text-blue-800 transition-colors"
            >
              {showFullDesc ? (
                <>
                  Lihat Lebih Sedikit
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Lihat Selengkapnya
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spesifikasi Buku</h2>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? 'bg-gray-50/60' : 'bg-white'}
                  >
                    <td className="py-3 px-5 text-sm font-medium text-gray-500 w-40">{spec.label}</td>
                    <td className="py-3 px-5 text-sm font-semibold text-gray-900">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rating & Reviews */}
      <section className="py-8 lg:py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RatingReviews
            rating={book.rating}
            reviewCount={book.reviewCount ?? 0}
            distribution={distribution}
            reviews={reviews}
          />
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-8 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kamu Mungkin Juga Suka</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((rec) => (
              <div
                key={rec.id}
                onClick={() => onNavigateBook(rec)}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-lg hover:border-blue-200 flex flex-col"
              >
                <div className="p-4 pb-2">
                  <BookCover book={rec} size="md" />
                </div>
                <div className="px-4 pb-4 flex flex-col flex-1">
                  <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors">
                    {rec.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{rec.author}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-gray-700">{rec.rating}</span>
                  </div>
                  <p className="text-lg font-bold text-blue-700 mt-2">{formatPrice(rec.price)}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigateBook(rec);
                    }}
                    className="mt-3 w-full bg-gray-100 hover:bg-blue-700 hover:text-white text-gray-700 text-xs font-semibold py-2.5 px-3 rounded-lg transition-colors"
                  >
                    Lihat Buku
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export type { CartItem };
