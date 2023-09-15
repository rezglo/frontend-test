import Cookies from "universal-cookie";
import { users } from "@/utils/data";

export const cookies = new Cookies(null, { path: "/" });

const authenticate = async ({ email }: { email: string }) => {
  const fakeDelay = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  const authenticatedUser = users.filter((user) => user.email === email)[0];

  if (authenticatedUser) {
    cookies.set("authenticated", authenticatedUser.id);
    await fakeDelay;
    return true;
  }

  alert("Invalid email");
  return false;
};

export default authenticate;
