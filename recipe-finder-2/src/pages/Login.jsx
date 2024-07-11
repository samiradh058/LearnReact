import { useEffect, useState } from "react";
import PageNav from "../components/PageNav";

import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated, wrongInput } = useAuth();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (name && password) {
      login(name, password);
    }
  }

  useEffect(
    function () {
      console.log(isAuthenticated);
      if (isAuthenticated) {
        navigate("/app", { replace: true });
        console.log(isAuthenticated);
      }
    },
    [isAuthenticated, navigate]
  );

  useEffect(
    function () {
      if (wrongInput) {
        setName("");
        setPassword("");
      }
    },
    [wrongInput]
  );

  return (
    <main>
      <PageNav />
      {wrongInput && <h1>Try again</h1>}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
export default Login;
