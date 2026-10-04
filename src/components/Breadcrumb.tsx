import { ChevronRight, Home } from 'lucide-react';
import type { Book } from '@/types';

interface BreadcrumbProps {
  book: Book;
  onNavigateHome: () => void;
  onNavigateBooks: () => void;
}

export function Breadcrumb({ book, onNavigateHome, onNavigateBooks }: BreadcrumbProps) {
  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center flex-wrap gap-1.5 text-sm">
          <li>
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-1 text-gray-500 hover:text-blue-700 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              Beranda
            </button>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <button
              onClick={onNavigateBooks}
              className="text-gray-500 hover:text-blue-700 transition-colors"
            >
              Semua Buku
            </button>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <span className="text-gray-500">{book.category}</span>
          </li>
          <li className="text-gray-300">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li>
            <span className="text-gray-900 font-medium line-clamp-1">{book.title}</span>
          </li>
        </ol>
      </div>
    </nav>
  );
}
