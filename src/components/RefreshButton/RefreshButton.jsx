import { MdCached } from "react-icons/md";
import classes from "./_RefreshButton.module.scss";

const RefreshButton = ({ getRandomQuote }) => {
  const iconStyles = { rotate: "90deg" };

  return (
    <button onClick={() => getRandomQuote()} className={classes.refresh}>
      random <MdCached size={25} style={iconStyles} />
    </button>
  );
};

export default RefreshButton;