import QuoteButton from "../QuoteButton/QuoteButton";
import classes from "./_Quote.module.scss";
import { useLocation } from "react-router-dom";
import { useQuoteGenerator } from "../../store/store";

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
