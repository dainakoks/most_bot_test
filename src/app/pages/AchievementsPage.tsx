import BridgeLogo from "../components/BridgeLogo";
import { Users, Coffee, Video, Ticket, Gift } from "lucide-react";
import svgPaths from "../../imports/svg-lhwdhhdzj9";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  completed: boolean;
}

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Приведи друга',
    description: 'Пригласите друга в театр',
    icon: Users,
    completed: true,
  },
  {
    id: '2',
    title: 'Мероприятие от театра',
    description: 'Посетите специальное мероприятие',
    icon: Ticket,
    completed: true,
  },
  {
    id: '3',
    title: 'Кофе в буфете',
    description: 'Купите напиток в буфете театра',
    icon: Coffee,
    completed: false,
  },
  {
    id: '4',
    title: 'Все спектакли Культпросвета',
    description: 'Посмотрите все постановки цикла',
    icon: Video,
    completed: true,
  },
  {
    id: '5',
    title: 'Первый отзыв',
    description: 'Напишите отзыв на спектакль',
    icon: Gift,
    completed: true,
  },
];

export default function AchievementsPage() {
  const completedCount = achievements.filter(a => a.completed).length;
  const canGetBonus = completedCount >= 5;

  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-center mb-6 pt-6">
        <BridgeLogo color="red" size="md" />
      </div>

      <h1 className="font-['DRUZHOK'] text-4xl text-white text-center mb-8 uppercase">
        Достижения
      </h1>

      {/* Progress */}
      <div className="mb-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#96c1d1]/20">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[#96c1d1]">Прогресс</span>
          <span className="text-white font-medium">{completedCount} / {achievements.length}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#DA1F25] to-[#96c1d1] h-full transition-all duration-500 rounded-full"
            style={{ width: `${(completedCount / achievements.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Bonus Offer */}
      {canGetBonus && (
        <div className="mb-8 bg-gradient-to-br from-[#DA1F25] to-[#a01519] rounded-xl p-6 animate-[fadeIn_0.5s_ease-in]">
          <div className="flex items-start gap-4">
            <div className="bg-white rounded-full p-3 flex-shrink-0">
              <svg className="w-12 h-12" fill="none" preserveAspectRatio="none" viewBox="0 0 245 138">
                <g>
                  <path clipRule="evenodd" d={svgPaths.p1ebf2c00} fill="#DA1F25" fillRule="evenodd" />
                  <path d={svgPaths.p1e153900} fill="#DA1F25" />
                </g>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-['DRUZHOK'] text-2xl text-white mb-2 uppercase">Бонус доступен!</h3>
              <p className="text-white/90 mb-4">
                Вы собрали 5 достижений и получили возможность приобрести два билета по цене одного!
              </p>
              <button className="bg-white text-[#DA1F25] px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Получить бонус
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Grid */}
      <div className="space-y-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          
          return (
            <div
              key={achievement.id}
              className={`bg-black/40 backdrop-blur-sm rounded-xl p-5 border transition-all duration-300 ${
                achievement.completed
                  ? 'border-[#DA1F25] bg-gradient-to-r from-[#DA1F25]/10 to-transparent'
                  : 'border-[#96c1d1]/20'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`rounded-full p-3 flex-shrink-0 ${
                  achievement.completed ? 'bg-[#DA1F25]' : 'bg-[#96c1d1]/20'
                }`}>
                  <Icon className={`w-6 h-6 ${achievement.completed ? 'text-white' : 'text-[#96c1d1]'}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-['Inter'] font-bold text-xl text-white mb-1 uppercase">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-[#96c1d1]">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.completed && (
                      <div className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full flex-shrink-0 ml-2">
                        ✓
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Motivational Message */}
      {!canGetBonus && (
        <div className="mt-6 text-center">
          <p className="text-[#96c1d1] text-sm">
            Осталось {5 - completedCount} достижений до бонуса «2 билета по цене одного»
          </p>
        </div>
      )}
    </div>
  );
}