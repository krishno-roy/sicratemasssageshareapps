import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Message from "./pages/Message";
import PrivateRoute from "./components/PrivateRoute";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/message/:id"
        element={
          <PrivateRoute>
            <Message />
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);
