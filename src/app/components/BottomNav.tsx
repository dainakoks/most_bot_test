import { Link, useLocation } from "react-router";
import { Home, BookOpen, Award, Calendar } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Главная' },
    { path: '/productions', icon: BookOpen, label: 'Постановки' },
    { path: '/achievements', icon: Award, label: 'Достижения' },
    { path: '/schedule', icon: Calendar, label: 'Афиша' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-[#96c1d1]/20 z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center flex-1 h-full"
            >
              <Icon 
                className={`h-6 w-6 ${active ? 'text-[#DA1F25]' : 'text-[#96c1d1]'}`}
                strokeWidth={active ? 2.5 : 2}
              />
              <span className={`text-xs mt-1 ${active ? 'text-[#DA1F25] font-medium' : 'text-[#96c1d1]'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
