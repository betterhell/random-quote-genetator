import classes from "./_Quote.module.scss";
import React from "react";
import QuoteButton from "../QuoteButton/QuoteButton";

const Quote = ({ quote, getAuthorQuotes, button }) => {
  if (!Array.isArray(quote.tags)) {
    return [quote.tags];
  }

  return (
    <div className={classes.quote}>
      <blockquote>{quote.body}</blockquote>
      {button ? (
        <QuoteButton getAuthorQuotes={getAuthorQuotes} quote={quote} />
      ) : null}
    </div>
  );
};

export default Quote;
