import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* <Route path="/auth" element={<Auth/>} /> */}
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
