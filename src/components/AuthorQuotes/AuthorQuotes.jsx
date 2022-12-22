import classes from "./_AuthorQuotes.module.scss";
import { useQuoteGenerator } from "../../store/store";
import Quote from "../Quote/Quote";

const AuthorQuotes = () => {
  const allAuthorQuotes = useQuoteGenerator((state) => state.allAuthorQuotes);
  const randomsQuotes = useQuoteGenerator((state) => state.currentRandomQuote);

  if (!Array.isArray(allAuthorQuotes.quotes)) {
    return [allAuthorQuotes.quotes];
  }

  return (
    <div className={classes.authorQuotes}>
      <div className={classes.authorQuotes__header}>
        <h1>{randomsQuotes.author}</h1>
      </div>
      <div className={classes.quotes}>
        {allAuthorQuotes.quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default AuthorQuotes;
