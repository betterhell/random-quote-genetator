import classes from "./_AuthorQuotes.module.scss";
import { useQuoteGenerator } from "../../store/store";
import Quote from "../Quote/Quote";

const AuthorQuotes = () => {
  const randomsQuotes = useQuoteGenerator((state) => state.currentRandomQuote);

  if (!Array.isArray(randomsQuotes.quotes)) {
    return [randomsQuotes.quotes];
  }

  return (
    <div className={classes.authorQuotes}>
      <div className={classes.authorQuotes__header}>
        <h1>{randomsQuotes.author}</h1>
      </div>
      <div className={classes.quotes}>
        {randomsQuotes.quotes.map((quote) => (
          <Quote key={quote.id} quoteText={quote.body} />
        ))}
      </div>
    </div>
  );
};

export default AuthorQuotes;
