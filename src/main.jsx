import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";
import Selection from "./pages/Selection";

createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/info" element={<Info />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/selection" element={<Selection/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
