import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import classes from "./_QuoteButton.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useQuoteGenerator } from "../../store/store";
import { useNavigate } from "react-router-dom";

const QuoteButton = () => {
  const randomsQuotes = useQuoteGenerator((state) => state.currentRandomQuote);
  const getAuthorQuotes = useQuoteGenerator((state) => state.getAuthorQuotes);
  const navigate = useNavigate();

  // if (!Array.isArray(quote)) {
  //   return [quote];
  // }

  const handler = () => {
    getAuthorQuotes();
    navigate(`/author/${randomsQuotes.id}`);
  };

  return (
    <button className={classes.button} onClick={handler}>
      <div className={classes.author}>
        {randomsQuotes.author}
        {randomsQuotes.tags.map((tag) => (
          <span key={uuidv4()}>{tag}</span>
        ))}
      </div>
      <div className={classes.icon}>
        <MdOutlineArrowRightAlt size={30} color="white" />
      </div>
    </button>
  );
};

export default QuoteButton;
