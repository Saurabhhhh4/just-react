import { useRef, useState, useEffect } from "react";

function useHover() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return [ref, hovered];
}

export default useHover;
