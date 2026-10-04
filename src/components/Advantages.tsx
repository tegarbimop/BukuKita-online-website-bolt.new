import { Truck, ShieldCheck, BookCheck, Zap } from 'lucide-react';

const advantages = [
  {
    icon: Truck,
    title: 'Pengiriman ke Seluruh Indonesia',
    desc: 'Kirim ke mana saja di Indonesia',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: ShieldCheck,
    title: 'Pembayaran Aman',
    desc: 'Transaksi terjamin keamanannya',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
  {
    icon: BookCheck,
    title: 'Buku Berkualitas',
    desc: 'Original dan terjamin asli',
    color: 'text-teal-700',
    bg: 'bg-teal-50',
  },
  {
    icon: Zap,
    title: 'Proses Pesanan Cepat',
    desc: 'Diproses dalam 1x24 jam',
    color: 'text-amber-700',
    bg: 'bg-amber-50',
  },
];

export function Advantages() {
  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Keunggulan Toko</h2>
          <p className="text-gray-500 mt-2 text-sm">Kenapa belanja di BukuKita?</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center text-center transition-shadow hover:shadow-sm"
            >
              <div className={`w-12 h-12 ${bg} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-sm font-bold text-gray-900">{title}</h3>
              <p className="text-xs text-gray-500 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
