import { MdCached } from "react-icons/md";
import classes from "./_RefreshButton.module.scss";
import { useQuoteGenerator } from "../../../store/store";

const RefreshButton = () => {
  const getRandomQuote = useQuoteGenerator((state) => state.getRandomQuote);

  return (
    <button onClick={getRandomQuote} className={classes.refresh}>
      random <MdCached size={25} style={{ rotate: "90deg" }} />
    </button>
  );
};

export default RefreshButton;
