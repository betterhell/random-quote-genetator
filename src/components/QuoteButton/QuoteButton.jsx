import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import classes from "./_QuoteButton.module.scss";
import { v4 as uuidv4 } from "uuid";

const QuoteButton = ({ getAuthorQuotes, quote }) => {
  return (
    <button className={classes.button} onClick={() => getAuthorQuotes()}>
      <div className={classes.author}>
        {quote.author}
        {quote.tags.map((tag) => (
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
