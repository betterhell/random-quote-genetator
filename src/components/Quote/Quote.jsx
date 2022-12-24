import classes from "./_Quote.module.scss";
import React from "react";
import QuoteButton from "../UI/QuoteButton/QuoteButton";
import { useQuoteGenerator } from "../../store/store";
import { useLocation } from "react-router-dom";

const Quote = ({ button, quoteText }) => {
  const location = useLocation();
  const randomsQuotes = useQuoteGenerator((state) => state.currentRandomQuote);

  return (
    <div className={classes.quote}>
      {location.pathname === "/" ? (
        <blockquote>{randomsQuotes.body}</blockquote>
      ) : (
        <blockquote>{quoteText}</blockquote>
      )}
      {button ? <QuoteButton /> : null}
    </div>
  );
};

export default Quote;
