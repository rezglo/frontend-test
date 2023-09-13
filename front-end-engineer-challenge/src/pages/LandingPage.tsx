import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Link to="/signin">Sign in</Link>
    </div>
  );
};

export default LandingPage;
