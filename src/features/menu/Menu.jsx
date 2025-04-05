import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
function Menu() {
  const menu = useLoaderData();
  return (
    <div className="w-full md:w-auto">
      <h1 className="my-4 text-center text-2xl font-bold text-yellow-800">
        Our Menu
      </h1>
      <ul className="mx-auto max-w-5xl divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
export default Menu;
