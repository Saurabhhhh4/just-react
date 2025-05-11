import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // direct access to DOM
  }, []);

  return <input ref={inputRef} type="text" />;
}
export default FocusInput;
