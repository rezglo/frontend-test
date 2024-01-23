import "./App.css";
import React,{ useEffect }  from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./helpers/routes";
import { useSelector } from "react-redux";
import { AlertComponent } from "./components/alertComponent";
import { useNavigate } from 'react-router-dom';

function App() {
  const { loggedIn } = useSelector((state) => state.auth);
  const routing = useRoutes(routes(loggedIn));
  const navigate = useNavigate();
  useEffect(() => {
   if(loggedIn === false){
    navigate('/login');
   }    
  }, [navigate]);

  return (
    <div className="App">
      <div>
        <AlertComponent />
      </div>
      {routing}
    </div>
  );
}

export default App;
