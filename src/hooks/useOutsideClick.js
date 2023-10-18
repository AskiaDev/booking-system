import { useEffect, useRef } from "react";

export const useOutsideClick = (handler, listenCapturing = true) => {
  const ref = useRef();

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("click", handleOutSideClick, listenCapturing);
    return () => {
      document.removeEventListener(
        "click",
        handleOutSideClick,
        listenCapturing
      );
    };
  }, [handler, listenCapturing]);

  return ref;
};
