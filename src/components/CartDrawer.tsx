import { X, Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import type { CartItem } from '@/types';
import { formatPrice } from '@/data/books';
import { BookCover } from './BookCover';

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onIncrease: (bookId: number) => void;
  onDecrease: (bookId: number) => void;
  onRemove: (bookId: number) => void;
}

export function CartDrawer({
  open,
  items,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
}: CartDrawerProps) {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-blue-700" />
            <h2 className="font-bold text-gray-900">Keranjang ({totalItems})</h2>
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors" aria-label="Tutup">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <ShoppingCart className="w-7 h-7 text-gray-300" />
              </div>
              <p className="text-gray-500 text-sm font-medium">Keranjang masih kosong</p>
              <p className="text-gray-400 text-xs mt-1">Yuk pilih buku favoritmu!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.book.id} className="flex gap-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-16 shrink-0">
                    <BookCover book={item.book} size="sm" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.book.title}</h4>
                    <p className="text-xs text-gray-500">{item.book.author}</p>
                    <p className="text-sm font-bold text-blue-700 mt-1">{formatPrice(item.book.price)}</p>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-1">
                        <button onClick={() => onDecrease(item.book.id)} className="p-1 text-gray-500 hover:text-blue-700 transition-colors" aria-label="Kurangi">
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                        <button onClick={() => onIncrease(item.book.id)} className="p-1 text-gray-500 hover:text-blue-700 transition-colors" aria-label="Tambah">
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <button onClick={() => onRemove(item.book.id)} className="p-1 text-gray-400 hover:text-red-500 transition-colors" aria-label="Hapus">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 p-4 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-900">{formatPrice(total)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Ongkir</span>
              <span className="text-gray-500">Dihitung saat checkout</span>
            </div>
            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-blue-700 text-lg">{formatPrice(total)}</span>
            </div>
            <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
