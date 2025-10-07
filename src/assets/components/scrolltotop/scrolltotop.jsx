import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth" // 👈 optionnel, pour un effet fluide
    });
  }, [pathname]); // se déclenche à chaque changement de page

  return null;
}