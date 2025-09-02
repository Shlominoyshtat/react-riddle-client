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
        <Route path="/" element={<App />} />
        <Route path="/liverbord" element={<LiverBord />} />
        <Route path="/play" element={<Play />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
