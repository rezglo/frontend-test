import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { Button } from "./button";

const cookies = new Cookies();

const SignOutButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        cookies.remove("authenticated");
        navigate("/");
      }}
    >
      Sign out
      <LogOut className="ml-2" size={20} />
    </Button>
  );
};

export default SignOutButton;
