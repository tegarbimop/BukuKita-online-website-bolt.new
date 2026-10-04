import { Search, ShoppingCart, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onCartClick: () => void;
  onNavigate: (id: string) => void;
}

export function Navbar({
  cartCount,
  searchQuery,
  onSearchChange,
  onCartClick,
  onNavigate,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNav('beranda')}
            className="flex items-center gap-2 shrink-0"
          >
            <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">BukuKita</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => handleNav('beranda')} className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Beranda</button>
            <button onClick={() => handleNav('buku')} className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Semua Buku</button>
            <button onClick={() => handleNav('kategori')} className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors">Kategori</button>
          </nav>

          {/* Search */}
          <div className="hidden sm:flex flex-1 max-w-xs relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari buku..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-600 hover:text-blue-700 transition-colors"
              aria-label="Keranjang"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-700 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="hidden md:block bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              Masuk
            </button>

            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari buku..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            <button onClick={() => handleNav('beranda')} className="block w-full text-left text-sm font-medium text-gray-600 py-2">Beranda</button>
            <button onClick={() => handleNav('buku')} className="block w-full text-left text-sm font-medium text-gray-600 py-2">Semua Buku</button>
            <button onClick={() => handleNav('kategori')} className="block w-full text-left text-sm font-medium text-gray-600 py-2">Kategori</button>
            <button className="block w-full text-left text-sm font-semibold text-white bg-blue-700 py-2 px-3 rounded-lg">Masuk</button>
          </div>
        </div>
      )}
    </header>
  );
}
