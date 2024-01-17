'use client'

import { useState, useEffect } from 'react'

export default function WidthControlledComponent({ children }) {
  const navLinks = [
    {to: "/", label: "H O M E"},
    {to: "/blogs", label: "B L O G S"},
    {to: "/resume", label: "R E S U M E"},
    {to: "/more", label: "M O R E . . ."},
  ]

  const size = useWindowSize()

  if (size.width >= 768) {
    return null
  }

  return <div className="">
    {children}
  </div>;
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
