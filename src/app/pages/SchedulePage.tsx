import BridgeLogo from "../components/BridgeLogo";
import { Clock, Calendar, ExternalLink } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  ageRestriction: string;
  link: string;
}

const events: Event[] = [
  {
    id: '1',
    title: 'Серебряный век. Эпоха в лицах',
    date: '15 марта 2026',
    time: '19:00',
    ageRestriction: '12+',
    link: 'https://most.piotrovsky.ru',
  },
  {
    id: '2',
    title: 'Бродский. 12 новелл от первого лица',
    date: '22 марта 2026',
    time: '19:30',
    ageRestriction: '16+',
    link: 'https://most.piotrovsky.ru',
  },
  {
    id: '3',
    title: 'Марина Цветаева. Повесть о Сонечке',
    date: '29 марта 2026',
    time: '18:00',
    ageRestriction: '12+',
    link: 'https://most.piotrovsky.ru',
  },
  {
    id: '4',
    title: 'Большой квартирник на Большой Садовой',
    date: '5 апреля 2026',
    time: '20:00',
    ageRestriction: '18+',
    link: 'https://most.piotrovsky.ru',
  },
  {
    id: '5',
    title: 'Встреча с режиссером',
    date: '12 апреля 2026',
    time: '17:00',
    ageRestriction: '6+',
    link: 'https://most.piotrovsky.ru',
  },
  {
    id: '6',
    title: 'Вечер поэзии Серебряного века',
    date: '19 апреля 2026',
    time: '19:00',
    ageRestriction: '12+',
    link: 'https://most.piotrovsky.ru',
  },
];

export default function SchedulePage() {
  return (
    <div className="min-h-screen p-6">
      <div className="flex items-center justify-center mb-6 pt-6">
        <BridgeLogo color="red" size="md" />
      </div>

      <h1 className="font-['DRUZHOK'] text-4xl text-white text-center mb-2 uppercase">
        Афиша
      </h1>
      <p className="text-[#96c1d1] text-center mb-8">События и спектакли театра</p>

      <div className="space-y-3">
        {events.map((event) => (
          <a
            key={event.id}
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/40 backdrop-blur-sm rounded-xl p-5 border border-[#96c1d1]/20 hover:border-[#DA1F25] transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-['Inter'] font-bold text-lg text-white group-hover:text-[#DA1F25] transition-colors flex-1 uppercase leading-tight">
                {event.title}
              </h3>
              <div className="bg-[#DA1F25] text-white text-xs font-medium px-2 py-1 rounded-full flex-shrink-0">
                {event.ageRestriction}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-[#96c1d1]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            </div>

            <div className="flex items-center justify-end mt-3 pt-3 border-t border-[#96c1d1]/20">
              <span className="text-[#DA1F25] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                Купить билет
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-[#96c1d1]/20 text-center">
        <p className="text-[#96c1d1] mb-2">Адрес театра</p>
        <p className="text-white font-medium mb-1">Малая Никитская ул. 12, стр. 12</p>
        <p className="text-sm text-[#96c1d1]">Москва</p>
      </div>
    </div>
  );
}