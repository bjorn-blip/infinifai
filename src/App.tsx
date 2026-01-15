import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/Home";
import { Privacy } from "@/pages/Privacy";
import { Confirmation } from "@/pages/Confirmation";
import ToolPage from "@/pages/Tool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/thank-you" element={<Confirmation />} />
      <Route path="/tool" element={<ToolPage />} />
    </Routes>
  );
}

export default App;
