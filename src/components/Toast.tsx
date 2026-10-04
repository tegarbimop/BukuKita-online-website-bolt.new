import { CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  onHide: () => void;
}

export function Toast({ message, show, onHide }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-lg shadow-lg">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        {message}
      </div>
    </div>
  );
}
