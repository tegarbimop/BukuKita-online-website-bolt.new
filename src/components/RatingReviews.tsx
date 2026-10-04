import { Star } from 'lucide-react';
import type { Review, RatingDistribution } from '@/types';

interface RatingReviewsProps {
  rating: number;
  reviewCount: number;
  distribution: RatingDistribution[];
  reviews: Review[];
}

export function RatingReviews({
  rating,
  reviewCount,
  distribution,
  reviews,
}: RatingReviewsProps) {
  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rating &amp; Ulasan</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Summary */}
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-5xl font-bold text-gray-900">{rating}</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= Math.floor(rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">{reviewCount.toLocaleString('id-ID')} ulasan</p>
          </div>

          {/* Distribution */}
          <div className="lg:col-span-2 space-y-2">
            {distribution.map((item) => (
              <div key={item.star} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16 shrink-0">
                  <span className="text-sm font-medium text-gray-700">{item.star}</span>
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-10 text-right shrink-0">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews list */}
        <div className="mt-8 space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-100 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-700">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                    <p className="text-xs text-gray-400">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i <= review.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
