import { useContext } from "react";
import Cookies from "universal-cookie";

import { GlobalContext } from "@/context/globalContext";

const cookies = new Cookies();

const useUser = () => {
  const { users } = useContext(GlobalContext);
  const userId = cookies.get("authenticated");

  const authenticatedUser = users.filter((user) => user.id === userId)[0];
  return authenticatedUser;
};

export default useUser;
