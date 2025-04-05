import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="w-full border-b border-yellow-100 bg-stone-100 shadow-sm shadow-yellow-700/5">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-stone-600">
            🍕 Fast Pizza Co.
          </span>
        </Link>
        <div className="flex gap-4 items-center">
          <SearchOrder />

          <UserName />
        </div>
      </div>
    </header>
  );
}

export default Header;
