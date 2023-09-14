import Cookies from "universal-cookie";

const cookies = new Cookies();

const authenticate = async ({ email }: { email: string }) => {
  const fakeDelay = new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  if (email === "test@mail.com") {
    cookies.set("authenticated", true);
    await fakeDelay;
    return true;
  }

  return false;
};

export default authenticate;
