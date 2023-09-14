import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";
import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";

export const action = async () => {
  alert("User sign in");
  return redirect("/");
};

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <Logo />

      <h1 className="text-6xl font-bold mt-9">Sign in to Slack</h1>

      <p className="text-lg mt-4">
        We suggest using the{" "}
        <span className="font-semibold">email address you use at work.</span>
      </p>

      <div className="mt-8 max-w-sm w-full">
        <SignInForm />
      </div>
    </div>
  );
};

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("test@email.com");

  return (
    <Form method="post" className="w-full space-y-4">
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="name@work-email.com"
        type="email"
        className="w-full focus-visible:ring-0 focus-visible:outline-[#bbe1f1] focus-visible:outline-offset-0 focus-visible:border-blue-900"
        required
      />
      <Button className="w-full" type="submit">
        Sign In With Email
      </Button>
    </Form>
  );
};

export default SignIn;
