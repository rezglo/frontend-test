import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../ui/components/auth/LoginForm";
import SignupForm from "../ui/components/auth/SignupForm";
import HomePage from "./pages/HomePage";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
