import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to="/landing">Logout</Link>
    </div>
  );
};

export default Home;
