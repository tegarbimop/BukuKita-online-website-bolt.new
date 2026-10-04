import type { Book, Review, RatingDistribution, CategoryName } from '@/types';

export const categories: CategoryName[] = [
  'Novel',
  'Pendidikan',
  'Teknologi',
  'Bisnis',
  'Agama',
  'Pengembangan Diri',
];

export const books: Book[] = [
  {
    id: 1,
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    price: 95000,
    rating: 4.8,
    category: 'Novel',
    coverFrom: '#3b82f6',
    coverTo: '#1e3a8a',
    description: 'Kisah inspiratif sepuluh anak Belitung yang berjuang meraih pendidikan di tengah keterbatasan.',
    longDescription:
      'Laskar Pelangi adalah novel pertama karya Andrea Hirata yang menceritakan kisah nyata tentang perjuangan sepuluh anak dari keluarga miskin di Pulau Belitung untuk mendapatkan pendidikan. Berlatar belakang sebuah SD Muhammadiyah yang terancam ditutup karena tidak memiliki murid cukup, novel ini mengangkat tema tentang harapan, persahabatan, dan tekad untuk meraih mimpi meskipun dalam keterbatasan. Setiap karakter memiliki kisah dan perjuangan uniknya sendiri, mulai dari Lintang yang sangat pintar namun harus berhenti sekolah, hingga Ikal yang bercita-cita melanjutkan pendidikan ke universitas. Buku ini telah menginspirasi jutaan pembaca dan diadaptasi ke layar lebar dengan sukses.',
    publisher: 'Bentang Pustaka',
    yearPublished: 2005,
    pageCount: 529,
    language: 'Indonesia',
    isbn: '9789793062792',
    reviewCount: 1245,
    stock: 25,
  },
  {
    id: 2,
    title: 'Bumi',
    author: 'Tere Liye',
    price: 89000,
    rating: 4.7,
    category: 'Novel',
    coverFrom: '#f59e0b',
    coverTo: '#b45309',
    description: 'Petualangan Raib, Seli, dan Ali menjelajah dunia paralel penuh misteri dan keajaiban.',
    publisher: 'Gramedia Pustaka Utama',
    yearPublished: 2014,
    pageCount: 440,
    language: 'Indonesia',
    isbn: '9786020323990',
    reviewCount: 890,
    stock: 18,
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 120000,
    rating: 4.9,
    category: 'Pengembangan Diri',
    coverFrom: '#0ea5e9',
    coverTo: '#0c4a6e',
    description: 'Panduan praktis membangun kebiasaan baik dan menghilangkan kebiasaan buruksesuai sistem sains.',
    publisher: 'Gramedia Pustaka Utama',
    yearPublished: 2019,
    pageCount: 352,
    language: 'Indonesia',
    isbn: '9786020637473',
    reviewCount: 2103,
    stock: 30,
  },
  {
    id: 4,
    title: 'Filosofi Teras',
    author: 'Henry Manampiring',
    price: 98000,
    rating: 4.6,
    category: 'Pengembangan Diri',
    coverFrom: '#10b981',
    coverTo: '#065f46',
    description: 'Penerapan filsafat Stoa dalam kehidupan modern untuk meraih ketenangan dan ketangguhan mental.',
    publisher: 'Kompas',
    yearPublished: 2018,
    pageCount: 280,
    language: 'Indonesia',
    isbn: '9786024125233',
    reviewCount: 675,
    stock: 12,
  },
  {
    id: 5,
    title: 'Belajar JavaScript',
    author: 'Andi Pratama',
    price: 85000,
    rating: 4.5,
    category: 'Teknologi',
    coverFrom: '#6366f1',
    coverTo: '#312e81',
    description: 'Buku panduan lengkap mempelajari JavaScript dari dasar hingga tingkat lanjut.',
    publisher: 'Informatika Bandung',
    yearPublished: 2022,
    pageCount: 420,
    language: 'Indonesia',
    isbn: '9786237842103',
    reviewCount: 320,
    stock: 8,
  },
  {
    id: 6,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 110000,
    rating: 4.8,
    category: 'Bisnis',
    coverFrom: '#14b8a6',
    coverTo: '#115e59',
    description: 'Pelajaran abadi tentang keuangan, kekayaan, dan keserakahan dari berbagai sudut pandang.',
    publisher: 'Gramedia Pustaka Utama',
    yearPublished: 2021,
    pageCount: 256,
    language: 'Indonesia',
    isbn: '9786020641920',
    reviewCount: 1567,
    stock: 22,
  },
];

export function getBookById(id: number): Book | undefined {
  return books.find((book) => book.id === id);
}

export function getRecommendations(bookId: number, count: number): Book[] {
  return books.filter((book) => book.id !== bookId).slice(0, count);
}

export const reviews: Review[] = [
  {
    id: 1,
    bookId: 1,
    name: 'Dewi Lestari',
    rating: 5,
    date: '15 September 2026',
    comment: 'Bukunya bagus dan pengirimannya cepat. Kondisi buku juga sangat baik, tidak ada halaman yang rusak. Novel ini sangat inspiratif!',
  },
  {
    id: 2,
    bookId: 1,
    name: 'Rudi Hartono',
    rating: 5,
    date: '10 September 2026',
    comment: 'Salah satu novel terbaik yang pernah saya baca. Cerita tentang perjuangan pendidikan ini sangat menyentuh hati. Recommended banget!',
  },
  {
    id: 3,
    bookId: 1,
    name: 'Siti Nurhaliza',
    rating: 4,
    date: '5 September 2026',
    comment: 'Buku bagus, kualitas cetakan rapi. Isi ceritanya deep dan emosional. Pengiriman agak lama tapi worth it.',
  },
  {
    id: 4,
    bookId: 1,
    name: 'Ahmad Fauzi',
    rating: 5,
    date: '1 September 2026',
    comment: 'Membaca ulang Laskar Pelangi selalu memberikan semangat baru. Pelayanan BukuKita juga sangat memuaskan!',
  },
];

export function getReviewsByBookId(bookId: number): Review[] {
  return reviews.filter((review) => review.bookId === bookId);
}

export function getRatingDistribution(bookId: number): RatingDistribution[] {
  const bookReviews = getReviewsByBookId(bookId);
  const total = bookReviews.length || 1;

  return [5, 4, 3, 2, 1].map((star) => {
    const count = bookReviews.filter((r) => r.rating === star).length;
    return {
      star,
      count,
      percentage: Math.round((count / total) * 100),
    };
  });
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}
