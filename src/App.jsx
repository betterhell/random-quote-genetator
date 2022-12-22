import Quote from "./components/Quote/Quote";
import RefreshButton from "./components/RefreshButton/RefreshButton";
import AuthorQuotes from "./components/AuthorQuotes/AuthorQuotes";
import { Comment } from "react-loader-spinner";
import { Route, Routes, useLocation } from "react-router-dom";
import button from "./components/QuoteButton/QuoteButton";
import CreatedBy from "./components/CreatedBy/CreatedBy";
import BackButton from "./components/BackButton/BackButton";
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
        <Route path={`/author/:id`} element={<AuthorQuotes />} />
      </Routes>
      <div className="createdBy">
        <CreatedBy />
      </div>
    </div>
  );
}

export default App;
