import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";

const AppRoutes = () => {
  return (
    // Extends Main Layout UI
    <MainLayout>
      <Switch>
        <Route path="/movie/:imdbID">
          <MoviePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </MainLayout>
  );
};

export default AppRoutes;
