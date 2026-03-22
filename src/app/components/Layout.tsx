import { Outlet } from "react-router";
import BottomNav from "./BottomNav";
import MPatternBackground from "./MPatternBackground";

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter']">
      <MPatternBackground />
      <div className="relative z-10 pb-16 max-w-md mx-auto">
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
}
