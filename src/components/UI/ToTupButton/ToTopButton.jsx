import React, { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import classes from "./_ToTopButton.module.scss";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const backToTopHandler = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShowButton(true);
    } else if (scrolled <= 300) {
      setShowButton(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        onClick={backToTopHandler}
        className={`${classes.toTopButton} ${
          showButton ? `${classes.visible}` : null
        }`}
      >
        <BsArrowUpCircle size={35} />
      </button>
    </>
  );
};

export default ToTopButton;
