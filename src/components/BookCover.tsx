import type { Book } from '@/types';

interface BookCoverProps {
  book: Book;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-32',
  md: 'h-48',
  lg: 'h-56',
  xl: 'h-96',
};

export function BookCover({ book, size = 'md' }: BookCoverProps) {
  return (
    <div
      className={`relative w-full ${sizeClasses[size]} rounded-lg overflow-hidden flex flex-col justify-between p-3 shadow-sm`}
      style={{
        background: `linear-gradient(145deg, ${book.coverFrom}, ${book.coverTo})`,
      }}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">
            {book.category}
          </p>
          <h4 className="text-white font-bold text-sm leading-tight mt-1 line-clamp-3">
            {book.title}
          </h4>
          <p className="text-white/70 text-[10px] mt-1">{book.author}</p>
        </div>
        <div className="self-end">
          <div className="h-12 w-0.5 bg-white/30" />
        </div>
      </div>
    </div>
  );
}
