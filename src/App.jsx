import Quote from "./components/Quote/Quote";
import RefreshButton from "./components/UI/RefreshButton/RefreshButton";
import AuthorQuotes from "./components/AuthorQuotes/AuthorQuotes";
import button from "./components/QuoteButton/QuoteButton";
import CreatedBy from "./components/CreatedBy/CreatedBy";
import BackButton from "./components/UI/BackButton/BackButton";
import ToTopButton from "./components/UI/ToTupButton/ToTopButton";
import { Comment } from "react-loader-spinner";
import { Route, Routes, useLocation } from "react-router-dom";
import { useQuoteGenerator } from "./store/store";

function App() {
  const location = useLocation();

  const loading = useQuoteGenerator((state) => state.isLoading);

  return (
    <div className="App">
      {location.pathname === "/" ? <RefreshButton /> : <BackButton />}
      <Routes>
        <Route
          path="/"
          element={loading ? <Comment /> : <Quote button={button} />}
        />
        <Route
          path={`/author/:id`}
          element={loading ? <Comment /> : <AuthorQuotes />}
        />
      </Routes>
      <ToTopButton />
      <div className="createdBy">
        <CreatedBy />
      </div>
    </div>
  );
}

export default App;
