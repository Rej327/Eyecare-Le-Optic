import { useState, useEffect } from "react";
import styles from "@/styles/scrollToTopButton.module.scss";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${styles.button} ${
        showButton ? styles.visible : styles.hidden
      }`}
      onClick={handleButtonClick}
    >
      △
    </button>
  );
};

export default ScrollToTopButton;
