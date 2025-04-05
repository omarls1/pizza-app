import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserName() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;
  return (
    <Link to="/menu">
      <div className="hidden text-sm font-semibold text-yellow-800 md:block">
        {username} Menu
      </div>
    </Link>
  );
}

export default UserName;
