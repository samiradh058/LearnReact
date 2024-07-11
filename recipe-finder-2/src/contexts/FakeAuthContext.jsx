/*eslint-disable*/

import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  wrongInput: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        wrongInput: false,
      };

    case "logout":
      return { ...state, isAuthenticated: false };

    case "error-login":
      return { ...state, wrongInput: true };

    default:
      throw new Error("Some error occured in login or logout");
  }
}

const FAKE_USER = {
  name: "samir",
  password: "abc",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, wrongInput }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(name, password) {
    if (name === FAKE_USER.name && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else dispatch({ type: "error-login" });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, wrongInput, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was use outside of AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
