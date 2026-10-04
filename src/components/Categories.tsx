import { BookMarked, GraduationCap, Cpu, Briefcase, Heart, TrendingUp } from 'lucide-react';
import type { CategoryName } from '@/types';

interface CategoriesProps {
  selected: CategoryName | 'Semua';
  onSelect: (cat: CategoryName | 'Semua') => void;
}

const categoryItems: { name: CategoryName; icon: typeof BookMarked; color: string; bg: string }[] = [
  { name: 'Novel', icon: BookMarked, color: 'text-blue-700', bg: 'bg-blue-50' },
  { name: 'Pendidikan', icon: GraduationCap, color: 'text-emerald-700', bg: 'bg-emerald-50' },
  { name: 'Teknologi', icon: Cpu, color: 'text-indigo-700', bg: 'bg-indigo-50' },
  { name: 'Bisnis', icon: Briefcase, color: 'text-teal-700', bg: 'bg-teal-50' },
  { name: 'Agama', icon: Heart, color: 'text-rose-700', bg: 'bg-rose-50' },
  { name: 'Pengembangan Diri', icon: TrendingUp, color: 'text-amber-700', bg: 'bg-amber-50' },
];

export function Categories({ selected, onSelect }: CategoriesProps) {
  return (
    <section id="kategori" className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Kategori Buku</h2>
          <p className="text-gray-500 mt-2 text-sm">Pilih kategori favoritmu</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryItems.map(({ name, icon: Icon, color, bg }) => {
            const isActive = selected === name;
            return (
              <button
                key={name}
                onClick={() => onSelect(isActive ? 'Semua' : name)}
                className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all duration-200 ${
                  isActive
                    ? 'border-blue-600 bg-blue-50 shadow-sm'
                    : 'border-gray-100 bg-white hover:border-blue-200 hover:shadow-sm'
                }`}
              >
                <div className={`w-12 h-12 ${isActive ? 'bg-blue-700' : bg} rounded-lg flex items-center justify-center transition-colors`}>
                  <Icon className={`w-6 h-6 ${isActive ? 'text-white' : color}`} />
                </div>
                <span className={`text-xs font-semibold text-center ${isActive ? 'text-blue-700' : 'text-gray-700'}`}>
                  {name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
