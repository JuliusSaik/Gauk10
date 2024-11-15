import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import DashboardPage from "../../pages/DashboardPage";
import TestCalendarPage from "../../pages/TestCalendarPage";
import StudyCardsPage from "../../pages/StudyCardsPage";

export const getRoutes = () => {
  return (
    <>
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.CALENDAR} element={<TestCalendarPage />} />
      <Route path={ROUTES.STUDY_CARDS} element={<StudyCardsPage />} />
    </>
  );
};

const Router = () => {
  return { routes: <Routes>{getRoutes()}</Routes> };
};
export default Router;
