import classes from "./_Quote.module.scss";
import React from "react";
import QuoteButton from "../QuoteButton/QuoteButton";
import { useQuoteGenerator } from "../../store/store";

const Quote = ({ button }) => {
  const randomsQuotes = useQuoteGenerator((state) => state.currentRandomQuote);

  // if (!Array.isArray(quote.tags)) {
  //   return [quote.tags];
  // }

  return (
    <div className={classes.quote}>
      <blockquote>{randomsQuotes.body}</blockquote>
      {button ? <QuoteButton /> : null}
    </div>
  );
};

export default Quote;
