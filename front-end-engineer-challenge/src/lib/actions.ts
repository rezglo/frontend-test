import { redirect } from "react-router-dom";
import authenticate from "./auth";

export const signInAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  let isAuthenticated;
  if (email) {
    isAuthenticated = await authenticate({ email });
  }

  if (isAuthenticated) {
    return redirect("/app");
  }

  return {};
};

export const chatAction = async () => {
  alert("Form submitted");
  return {};
};
