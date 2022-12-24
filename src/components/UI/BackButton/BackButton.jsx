import React from "react";
import classes from "./_BackButton.module.scss";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={classes.backButton}>
      back <RiArrowGoBackLine size={20} />
    </button>
  );
};

export default BackButton;
