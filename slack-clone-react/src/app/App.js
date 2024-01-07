import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "../ui/hocs/Layout";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<RootLayout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
