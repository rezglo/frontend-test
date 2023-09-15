import { useEffect, useRef } from "react";

const useFocus = () => {
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.focus();
    }
  });

  return elementRef;
};

export default useFocus;
