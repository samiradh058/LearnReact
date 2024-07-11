/*eslint-disable*/

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuth } from "../contexts/FakeAuthContext";
import Login from "./Login";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
