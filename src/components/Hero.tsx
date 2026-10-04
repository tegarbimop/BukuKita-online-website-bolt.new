import { ArrowRight, Star, BookOpen } from 'lucide-react';

interface HeroProps {
  onShopNow: () => void;
}

export function Hero({ onShopNow }: HeroProps) {
  return (
    <section id="beranda" className="bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              Toko Buku Online Terpercaya
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Temukan Buku <span className="text-blue-700">Favoritmu</span>
            </h1>
            <p className="text-gray-600 mt-4 text-base lg:text-lg leading-relaxed max-w-md">
              Beli buku dengan mudah, bayar secara online, dan buku akan dikirim langsung ke rumahmu.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onShopNow}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Belanja Sekarang
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-700 font-semibold px-6 py-3 rounded-lg transition-colors">
                Lihat Kategori
              </button>
            </div>

            <div className="flex gap-6 mt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">10rb+</p>
                <p className="text-xs text-gray-500">Judul Buku</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-xs text-gray-500">Pelanggan Puas</p>
              </div>
              <div className="border-l border-gray-200 pl-6">
                <p className="text-2xl font-bold text-gray-900">24/7</p>
                <p className="text-xs text-gray-500">Pengiriman</p>
              </div>
            </div>
          </div>

          {/* Right — book visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="absolute w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-3 gap-3">
              {[
                { from: '#3b82f6', to: '#1e3a8a', title: 'Novel', rotate: '-6deg' },
                { from: '#0ea5e9', to: '#0c4a6e', title: 'Edu', rotate: '0deg' },
                { from: '#f59e0b', to: '#b45309', title: 'Fiksi', rotate: '6deg' },
                { from: '#10b981', to: '#065f46', title: 'Self', rotate: '-3deg' },
                { from: '#6366f1', to: '#312e81', title: 'Tech', rotate: '3deg' },
                { from: '#14b8a6', to: '#115e59', title: 'Bisnis', rotate: '-6deg' },
              ].map((b, i) => (
                <div
                  key={i}
                  className={`w-32 h-44 rounded-lg shadow-lg flex flex-col justify-between p-3 ${i === 1 ? 'mt-6' : i === 4 ? 'mt-6' : ''}`}
                  style={{ background: `linear-gradient(145deg, ${b.from}, ${b.to})`, transform: `rotate(${b.rotate})` }}
                >
                  <div>
                    <p className="text-white/60 text-[9px] uppercase tracking-wider">BukuKita</p>
                    <p className="text-white font-bold text-sm mt-2">{b.title}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white/40 text-white/40" />
                    <Star className="w-3 h-3 fill-white/40 text-white/40" />
                    <Star className="w-3 h-3 fill-white/40 text-white/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
