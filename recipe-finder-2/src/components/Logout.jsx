import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function Logout() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }

  return (
    <div>
      Welcome, {user.name}
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default Logout;
