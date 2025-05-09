import { Link } from "react-router-dom";

const base =
  "text-stone-800 inline-block rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed";

const styles = {
  primary: base + " px-4 py-3 md:px-6 md:py-4",
  small: base + " py-2 px-4 md:px-5 text-xs md:py-2.5",
  round: base + " py-1 px-2.5 md:px-3.5 text-sm md:py-2",
  secondary:
    "inline-block text-sm rounded-full border-2 border-stone-200 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5",
};
function Button({ disabled, to, type, onClick, children }) {
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
