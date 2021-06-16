import { BrowserRouter as Router } from "react-router-dom";
import { setupAxios } from "./axios/setupAxios";
import store from "./redux/store";
import { Provider as ReduxProvider } from "react-redux";
import AppRoutes from "./AppRoutes";
import "./app.scss";

setupAxios();

const App = () => {
  return (
    // Redux store Provider
    <ReduxProvider store={store}>
      {/* React Router */}
      <Router>
        {/* Base application routes */}
        <AppRoutes />
      </Router>
    </ReduxProvider>
  );
};

export default App;
