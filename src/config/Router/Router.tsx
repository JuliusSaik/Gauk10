import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import DashboardPage from "../../pages/DashboardPage";
import TestCalendarPage from "../../pages/TestCalendarPage";
import CreateStudyCardsPage from "../../pages/CreateStudyCardsPage";
import StudyCardSetsPage from "../../pages/StudyCardSetsPage";
import SetsQAPage from "../../pages/SetsQAPage";

export const getRoutes = () => {
  return (
    <>
      <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
      <Route path={ROUTES.CALENDAR} element={<TestCalendarPage />} />
      <Route path={ROUTES.ALL_STUDY_CARDS} element={<StudyCardSetsPage />} />
      <Route
        path={ROUTES.CREATE_STUDY_CARDS}
        element={<CreateStudyCardsPage />}
      />
      <Route path={ROUTES.ONE_SETS_CARDS} element={<SetsQAPage />} />
    </>
  );
};

const Router = () => {
  return { routes: <Routes>{getRoutes()}</Routes> };
};
export default Router;
