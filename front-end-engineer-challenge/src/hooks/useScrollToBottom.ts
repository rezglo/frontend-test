import { useEffect, useRef } from "react";
import useChat from "./useChat";

const useScrollToBottom = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const chat = useChat();

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTo({
        top: divRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }),
    [chat];

  return divRef;
};

export default useScrollToBottom;
