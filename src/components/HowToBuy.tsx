import { MousePointer, CreditCard, Package } from 'lucide-react';

const steps = [
  {
    icon: MousePointer,
    title: 'Pilih Buku',
    desc: 'Cari dan pilih buku favoritmu, masukkan ke keranjang.',
  },
  {
    icon: CreditCard,
    title: 'Pembayaran/Transfer',
    desc: 'Bayar secara online dengan transfer bank atau e-wallet.',
  },
  {
    icon: Package,
    title: 'Buku Dikirim',
    desc: 'Buku dikirim langsung ke alamat rumahmu.',
  },
];

export function HowToBuy() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Cara Membeli</h2>
          <p className="text-gray-500 mt-2 text-sm">Hanya 3 langkah mudah</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center shadow-md">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-white border-2 border-blue-700 text-blue-700 text-xs font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mt-4">{title}</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-xs">{desc}</p>

              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[55%] w-[90%] h-0.5 border-t-2 border-dashed border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
