import "./App.css";
import Quote from "./components/Quote/Quote";
import RefreshButton from "./components/RefreshButton/RefreshButton";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthorQuotes from "./components/AuthorQuotes/AuthorQuotes";
import { Comment } from "react-loader-spinner";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import button from "./components/QuoteButton/QuoteButton";
import CreatedBy from "./components/CreatedBy/CreatedBy";
import BackButton from "./components/BackButton/BackButton";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const API_KEY = process.env.REACT_APP_API_KEY;

  const [randomQuote, setRandomQuote] = useState({});
  const [allAuthorQuotes, setAllAuthorQuotes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getRandomQuote = () => {
    axios
      .get("https://favqs.com/api/qotd")
      .then(({ data }) => {
        setRandomQuote({
          author: data.quote.author,
          body: data.quote.body,
          tags: data.quote.tags,
          id: data.quote.id,
        });
        setIsLoading(false);
      })
      .catch((error) => setError(`Ошибка запроса` + error));
  };

  const spaceReplacer = (author) => {
    let newAuthor = "";

    for (let i = 0; i < author.length; i++) {
      if (author[i] !== " ") {
        newAuthor += author[i];
      } else {
        newAuthor += "+";
      }
    }
    return newAuthor;
  };

  const getAuthorQuotes = () => {
    axios
      .get(
        `https://favqs.com/api/quotes/?filter=${spaceReplacer(
          randomQuote.author
        )}&type=author`,
        {
          headers: {
            Authorization: "Token token=" + API_KEY,
          },
        }
      )
      .then(({ data }) => {
        setAllAuthorQuotes({
          quotes: data.quotes,
          author: randomQuote.author,
          id: data.quotes.id,
        });
        navigate(`/author/${randomQuote.author}`);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <RefreshButton getRandomQuote={getRandomQuote} />
      ) : (
        <BackButton />
      )}
      <Routes>
        <Route
          path="/"
          element={
            isLoading ? (
              <Comment />
            ) : (
              <Quote
                quote={randomQuote}
                getAuthorQuotes={getAuthorQuotes}
                button={button}
              />
            )
          }
        />
        <Route
          path={`/author/:author`}
          element={<AuthorQuotes allAuthorQuotes={allAuthorQuotes} />}
        />
      </Routes>
      <div className="createdBy">
        <CreatedBy />
      </div>
    </div>
  );
}

export default App;
