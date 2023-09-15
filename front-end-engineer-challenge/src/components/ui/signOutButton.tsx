import React from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

import { Button } from "./button";
import { cookies } from "@/lib/auth";

const SignOutButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        cookies.remove("authenticated");

        setTimeout(() => {
          navigate("/signin");
        }, 200);
      }}
    >
      Sign out
      <LogOut className="ml-2" size={20} />
    </Button>
  );
};

export default SignOutButton;
