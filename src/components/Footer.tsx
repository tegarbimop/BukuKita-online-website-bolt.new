import { BookOpen, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">BukuKita</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Toko buku online terpercaya. Beli buku dengan mudah, bayar online, dikirim ke rumahmu.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('beranda')} className="hover:text-blue-400 transition-colors">Beranda</button></li>
              <li><button onClick={() => onNavigate('buku')} className="hover:text-blue-400 transition-colors">Semua Buku</button></li>
              <li><button onClick={() => onNavigate('kategori')} className="hover:text-blue-400 transition-colors">Kategori</button></li>
              <li><button onClick={() => onNavigate('unggulan')} className="hover:text-blue-400 transition-colors">Keunggulan</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                hello@bukukita.id
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                0800-1234-5678
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                Jakarta, Indonesia
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Terima Promo</h4>
            <p className="text-sm text-gray-400 mb-3">Dapatkan info promo dan buku terbaru.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 bg-gray-800 border border-gray-700 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-4 rounded-lg transition-colors">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-gray-500">
          &copy; 2026 BukuKita. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
