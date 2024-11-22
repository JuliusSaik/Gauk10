import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import DashboardPage from "../../pages/DashboardPage";
import TestCalendarPage from "../../pages/TestCalendarPage";
import StudyCardsPage from "../../pages/StudyCardSetsPage";
import CreateStudyCardsPage from "../../pages/CreateStudyCardsPage";
import StudyCardPage from "../../pages/StudyCardPage";

export const getRoutes = () => {
  return (
    <>
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.CALENDAR} element={<TestCalendarPage />} />
      <Route path={ROUTES.STUDY_CARDS} element={<StudyCardsPage />} />
      <Route
        path={ROUTES.CREATE_STUDY_CARDS}
        element={<CreateStudyCardsPage />}
      />
      <Route path={ROUTES.STUDY_CARD} element={<StudyCardPage />} />
    </>
  );
};

const Router = () => {
  return { routes: <Routes>{getRoutes()}</Routes> };
};
export default Router;
