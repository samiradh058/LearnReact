import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // Select DOM node that reference this (StyledModal) element will be stored
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // Event is handled only in capturing phase(top-down) when set to true. When set false or nothing, js knows document has been clicked when button is clicked as in bubble phase and the modal closes. We do not want that.
      document.addEventListener("click", handleClick, listenCapturing);

      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listenCapturing]
  );

  return ref;
}
