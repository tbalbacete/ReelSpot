import { Route, Routes } from "react-router-dom";
import * as React from "react";
import { DefaultLayout } from "@/layout";
import { useRouter } from "@/hooks";

const Home = React.lazy(() => import("@/pages/Home"));
const Search = React.lazy(() => import("@/pages/Search"));
const IndividualMovie = React.lazy(() => import("@/pages/IndividualMovie"));

export const AppRouter: React.FC = () => {
  const { routes, currentRoute } = useRouter();
  React.useEffect(() => {
    document.title = `${currentRoute?.label} - ReelSpot` ?? "ReelSpot"
  });

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.search.path} element={<Search />} />
        <Route path={routes.individualMovie.path} element={<IndividualMovie />} />
      </Route>
    </Routes>
  )
}