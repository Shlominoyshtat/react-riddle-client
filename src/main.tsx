import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LiverBord from "./pages/liverBord.tsx";
import Play from "./pages/play.tsx";
import Login from "./pages/login.tsx";
import Menu from "./pages/menu.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/app/liverbord" element={<LiverBord />} />
        <Route path="/app/play" element={<Play />} />
        <Route path="/app/login" element={<Login />} />
        <Route path="/app/login/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
