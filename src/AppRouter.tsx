import { Route, Routes } from "react-router-dom";
import { useRouter } from "./hooks";
import * as React from "react";
import { DefaultLayout } from "./layout/DefaultLayout";
import Search from "./pages/Search";

const Home = React.lazy(() => import("./pages/Home"));

export const AppRouter: React.FC = () => {
  const { routes } = useRouter();
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path={routes.search.path} element={<Search />} />
      </Route>
    </Routes>
  )
}