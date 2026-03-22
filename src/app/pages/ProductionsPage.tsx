import { Link } from "react-router";
import { productions } from "../data/productions";
import BridgeLogo from "../components/BridgeLogo";
import { ChevronRight, Star } from "lucide-react";

// Mock data for visited productions
const visitedProductions = new Set(['1', '2']);

export default function ProductionsPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-center mb-6 pt-6">
        <BridgeLogo color="red" size="md" />
      </div>

      <h1 className="font-['DRUZHOK'] text-4xl text-white text-center mb-8 uppercase">
        Дневник постановок
      </h1>

      <div className="space-y-4">
        {productions.map((production) => {
          const isVisited = visitedProductions.has(production.id);
          
          return (
            <Link
              key={production.id}
              to={`/productions/${production.id}`}
              className="block bg-black/40 backdrop-blur-sm rounded-xl p-5 border border-[#96c1d1]/20 hover:border-[#DA1F25] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-['Inter'] font-bold text-xl text-white mb-2 group-hover:text-[#DA1F25] transition-colors">
                        {production.title}
                      </h3>
                      <p className="text-sm text-[#96c1d1] leading-relaxed">
                        {production.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#96c1d1] group-hover:text-[#DA1F25] transition-colors flex-shrink-0 mt-1" />
                  </div>
                  
                  {isVisited && (
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-[#96c1d1]/20">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${star <= 4 ? 'fill-[#DA1F25] text-[#DA1F25]' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-green-400 font-medium">✓ Посещено</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}