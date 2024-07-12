import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Login from "./pages/Login";
import ProtectedRoute from "./pages/ProtectedRoute";

import { AuthProvider } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProvider className="bg-home-bg">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
