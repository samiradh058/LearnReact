import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function Logout() {
  // const { user, logout } = useAuth();
  const { logout } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div>
      {/* Welcome, {user.name} */}
      Welcome
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Logout;
