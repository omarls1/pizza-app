import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div
      className="flex h-screen w-screen items-center justify-start bg-cover px-6 text-white"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="w-full md:w-2/3 bg-yellow-400/10 rounded p-4">
        <h1 className="mb-8 text-3xl font-bold drop-shadow-lg md:text-5xl">
          The best pizza.
          <br />
          <span className="text-yellow-400">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
