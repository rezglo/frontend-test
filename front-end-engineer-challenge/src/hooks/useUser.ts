import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const useUser = () => {
  const { users } = useContext(GlobalContext);
  const userId = cookies.get("authenticated");

  const authenticatedUser = users.filter((user) => user.id === userId)[0];
  return authenticatedUser;
};

export default useUser;
