import { useState, useMemo, useCallback } from 'react';
import type { Book, CartItem, CategoryName, Page } from '@/types';
import {
  books,
  getBookById,
  getRecommendations,
  getReviewsByBookId,
  getRatingDistribution,
} from '@/data/books';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { BookCard } from '@/components/BookCard';
import { Advantages } from '@/components/Advantages';
import { HowToBuy } from '@/components/HowToBuy';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { BookDetailPage } from '@/components/BookDetailPage';
import { Toast } from '@/components/Toast';
import { Search } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryName | 'Semua'>('Semua');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeBookId, setActiveBookId] = useState<number | null>(null);
  const [toast, setToast] = useState({ show: false, message: '' });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'Semua' || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const showToast = useCallback((message: string) => {
    setToast({ show: true, message });
  }, []);

  const addToCart = useCallback((book: Book, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { book, quantity }];
    });
    showToast('Buku berhasil ditambahkan ke keranjang');
  }, [showToast]);

  const increaseQty = useCallback((bookId: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.book.id === bookId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQty = useCallback((bookId: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.book.id === bookId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((bookId: number) => {
    setCart((prev) => prev.filter((item) => item.book.id !== bookId));
  }, []);

  const scrollTo = useCallback((id: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, []);

  const navigateToDetail = useCallback((book: Book) => {
    setActiveBookId(book.id);
    setCurrentPage('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigateToHome = useCallback(() => {
    setCurrentPage('home');
    setActiveBookId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const buyNow = useCallback((book: Book, quantity: number) => {
    addToCart(book, quantity);
    showToast('Mengarahkan ke halaman checkout...');
  }, [addToCart, showToast]);

  const activeBook = activeBookId ? getBookById(activeBookId) : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        cartCount={cartCount}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCartClick={() => setCartOpen(true)}
        onNavigate={scrollTo}
      />

      {currentPage === 'home' ? (
        <>
          <Hero onShopNow={() => scrollTo('buku')} />

          <Categories selected={selectedCategory} onSelect={setSelectedCategory} />

          <section id="buku" className="py-12 lg:py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Buku Populer</h2>
                <p className="text-gray-500 mt-2 text-sm">
                  {selectedCategory === 'Semua'
                    ? 'Pilihan buku terlaris untukmu'
                    : `Kategori: ${selectedCategory}`}
                </p>
              </div>

              {filteredBooks.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <Search className="w-7 h-7 text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Buku tidak ditemukan</p>
                  <p className="text-gray-400 text-sm mt-1">Coba kata kunci atau kategori lain</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {filteredBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      onAddToCart={addToCart}
                      onDetail={navigateToDetail}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>

          <div id="unggulan">
            <Advantages />
          </div>

          <HowToBuy />
        </>
      ) : (
        activeBook && (
          <BookDetailPage
            book={activeBook}
            recommendations={getRecommendations(activeBook.id, 4)}
            reviews={getReviewsByBookId(activeBook.id)}
            distribution={getRatingDistribution(activeBook.id)}
            onAddToCart={addToCart}
            onBuyNow={buyNow}
            onNavigateHome={navigateToHome}
            onNavigateBooks={() => scrollTo('buku')}
            onNavigateBook={navigateToDetail}
          />
        )
      )}

      <Footer onNavigate={scrollTo} />

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQty}
        onDecrease={decreaseQty}
        onRemove={removeFromCart}
      />

      <Toast
        message={toast.message}
        show={toast.show}
        onHide={() => setToast({ show: false, message: '' })}
      />
    </div>
  );
}

export default App;
