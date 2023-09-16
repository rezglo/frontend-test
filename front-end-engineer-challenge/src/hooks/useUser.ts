import { useContext } from "react";

import { GlobalContext } from "@/context/globalContext";
import { cookies } from "@/lib/auth";

const useUser = () => {
  const { users } = useContext(GlobalContext);
  const userId = cookies.get("authenticated");

  const authenticatedUser = users.filter((user) => user.id === userId)[0];
  return authenticatedUser;
};

export default useUser;
