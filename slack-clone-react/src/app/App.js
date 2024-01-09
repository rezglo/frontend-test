import "../styles/App.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "../ui/hocs/Layout";
import LoginForm from "../ui/components/auth/LoginForm";
import SignupForm from "../ui/components/auth/SignupForm";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<RootLayout />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
