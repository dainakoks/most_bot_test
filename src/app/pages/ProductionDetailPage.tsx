import { useState } from "react";
import { useParams, Link } from "react-router";
import { productions } from "../data/productions";
import BridgeLogo from "../components/BridgeLogo";
import { ArrowLeft, Star, Camera, ExternalLink, Share2 } from "lucide-react";

export default function ProductionDetailPage() {
  const { id } = useParams();
  const production = productions.find(p => p.id === id);

  const [review, setReview] = useState({
    date: '',
    rating: 0,
    text: '',
    photo: null as string | null,
    submitted: false,
  });

  const [showPromoCode, setShowPromoCode] = useState(false);

  if (!production) {
    return <div className="p-6 text-white">Постановка не найдена</div>;
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReview(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (review.date && review.rating && review.text) {
      setReview(prev => ({ ...prev, submitted: true }));
      setShowPromoCode(true);
    }
  };

  const handleShare = () => {
    alert('Отзыв отправлен другу! Ваш промокод: ТЕАТР2024');
  };

  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-between mb-6 pt-6">
        <Link to="/productions" className="text-[#96c1d1] hover:text-[#DA1F25] transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <BridgeLogo color="red" size="sm" />
        {!review.submitted && (
          <a
            href="https://most.piotrovsky.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#DA1F25] hover:text-[#96c1d1] transition-colors text-sm"
          >
            <span>Билеты</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        {review.submitted && <div className="w-6" />}
      </div>

      <h1 className="font-['Inter'] font-bold text-3xl text-white mb-4 uppercase leading-tight">
        {production.title}
      </h1>

      <p className="text-[#96c1d1] mb-8 leading-relaxed">
        {production.description}
      </p>

      {/* Achievement Sticker */}
      {review.submitted && (
        <div className="mb-6 bg-gradient-to-br from-[#DA1F25] to-[#a01519] rounded-xl p-4 animate-[fadeIn_0.5s_ease-in]">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-3">
              <BridgeLogo color="red" size="sm" />
            </div>
            <div className="flex-1">
              <p className="text-white font-medium">Достижение разблокировано!</p>
              <p className="text-white/80 text-sm">Отзыв на спектакль</p>
            </div>
          </div>
        </div>
      )}

      {/* Promo Code Notification */}
      {showPromoCode && (
        <div className="mb-6 bg-[#96c1d1] rounded-xl p-4 animate-[fadeIn_0.5s_ease-in]">
          <p className="text-black font-medium mb-2">🎉 Получите промокод на скидку!</p>
          <p className="text-black/80 text-sm mb-3">
            Поделитесь отзывом с другом и получите промокод на скидку 10%
          </p>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-colors text-sm"
          >
            <Share2 className="w-4 h-4" />
            Поделиться отзывом
          </button>
        </div>
      )}

      {/* Review Form */}
      <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#96c1d1]/20">
        <h2 className="font-['DRUZHOK'] text-2xl text-white mb-6 uppercase">
          {review.submitted ? 'Ваш отзыв' : 'Оставить отзыв'}
        </h2>

        <div className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Дата посещения</label>
            <input
              type="date"
              value={review.date}
              onChange={(e) => setReview(prev => ({ ...prev, date: e.target.value }))}
              disabled={review.submitted}
              className="w-full bg-black/50 border border-[#96c1d1]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#DA1F25] focus:outline-none transition-colors disabled:opacity-50"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Оценка</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => !review.submitted && setReview(prev => ({ ...prev, rating: star }))}
                  disabled={review.submitted}
                  className="disabled:cursor-default"
                >
                  <Star
                    className={`w-8 h-8 transition-colors ${
                      star <= review.rating
                        ? 'fill-[#DA1F25] text-[#DA1F25]'
                        : 'text-gray-600 hover:text-[#DA1F25]'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Ваш отзыв</label>
            <textarea
              value={review.text}
              onChange={(e) => setReview(prev => ({ ...prev, text: e.target.value }))}
              disabled={review.submitted}
              className="w-full bg-black/50 border border-[#96c1d1]/40 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#DA1F25] focus:outline-none transition-colors min-h-[120px] disabled:opacity-50"
              placeholder="Поделитесь впечатлениями о спектакле..."
            />
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm text-[#96c1d1] mb-2">Фото с посещения</label>
            {!review.submitted && (
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                <div className="w-full h-32 rounded-lg bg-[#96c1d1]/20 border-2 border-dashed border-[#96c1d1] flex items-center justify-center overflow-hidden hover:bg-[#96c1d1]/30 transition-colors">
                  {review.photo ? (
                    <img src={review.photo} alt="Review" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center">
                      <Camera className="w-8 h-8 text-[#96c1d1] mb-2" />
                      <p className="text-sm text-[#96c1d1]">Загрузить фото</p>
                    </div>
                  )}
                </div>
              </label>
            )}
            {review.submitted && review.photo && (
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <img src={review.photo} alt="Review" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {/* Submit Button */}
          {!review.submitted && (
            <button
              onClick={handleSubmit}
              disabled={!review.date || !review.rating || !review.text}
              className="w-full bg-[#DA1F25] text-white py-3 rounded-lg font-medium hover:bg-[#a01519] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Отправить отзыв
            </button>
          )}
        </div>
      </div>
    </div>
  );
}