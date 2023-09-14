import { redirect } from "react-router-dom";

export const signInAction = async () => {
  alert("User sign in");
  return redirect("/");
};

export const chatAction = async () => {
  alert("Form submitted");
  return {};
};
