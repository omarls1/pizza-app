import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/UserName";

function Header() {
  return (
    <header className="mx-auto flex w-full items-center justify-between border-b border-stone-200 bg-yellow-50 p-4 uppercase sm:px-6">
      <Link
        to="/"
        class="self-center whitespace-nowrap text-2xl font-semibold text-stone-600"
      >
        🍕 Fast Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
