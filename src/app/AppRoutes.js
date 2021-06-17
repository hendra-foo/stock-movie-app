import { Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/Movie/MoviePage";

const AppRoutes = () => {
  return (
    // Extends Main Layout UI
    <Layout>
      <Switch>
        <Route path="/movie/:imdbID">
          <MoviePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
