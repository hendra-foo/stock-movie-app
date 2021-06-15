import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
import Home from "./pages/Home";
import MoviePage from "./pages/Movie";

const App = () => {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route path="/movie/:imdbID">
            <MoviePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;
