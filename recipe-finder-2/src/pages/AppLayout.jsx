import Logout from "../components/Logout";
import Recipes from "../components/Recipes";

function AppLayout() {
  return (
    <div>
      <Recipes />
      <Logout />
    </div>
  );
}

export default AppLayout;
