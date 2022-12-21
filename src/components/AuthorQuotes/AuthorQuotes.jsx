import Quote from "../Quote/Quote";
import classes from "./_AuthorQuotes.module.scss";

const AuthorQuotes = ({ allAuthorQuotes }) => {
  const { quotes, author } = allAuthorQuotes;

  if (!Array.isArray(quotes)) {
    return [quotes];
  }

  return (
    <div className={classes.authorQuotes}>
      <div className={classes.authorQuotes__header}>
        <h1>{author}</h1>
      </div>
      <div className={classes.quotes}>
        {quotes.map((quote) => (
          <Quote key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  );
};

export default AuthorQuotes;
