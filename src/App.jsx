import Quote from "./components/Quote/Quote";
import RefreshButton from "./components/UI/RefreshButton/RefreshButton";
import AuthorQuotes from "./components/AuthorQuotes/AuthorQuotes";
import { Comment } from "react-loader-spinner";
import { Route, Routes, useLocation } from "react-router-dom";
import button from "./components/UI/QuoteButton/QuoteButton";
import CreatedBy from "./components/CreatedBy/CreatedBy";
import BackButton from "./components/UI/BackButton/BackButton";
import { useQuoteGenerator } from "./store/store";
import ToTopButton from "./components/UI/ToTupButton/ToTopButton";

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
