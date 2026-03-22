import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProductionsPage from "./pages/ProductionsPage";
import ProductionDetailPage from "./pages/ProductionDetailPage";
import AchievementsPage from "./pages/AchievementsPage";
import SchedulePage from "./pages/SchedulePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "productions", Component: ProductionsPage },
      { path: "productions/:id", Component: ProductionDetailPage },
      { path: "achievements", Component: AchievementsPage },
      { path: "schedule", Component: SchedulePage },
    ],
  },
]);
