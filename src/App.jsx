import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/LandingPage/Landing";
import Bio from "./pages/BioPage/Bio";
import Calendar from "./pages/CalendarPage/Calendar";
import Admin from "./pages/AdminPage/Admin";
import History from "./pages/HistoryPage/History";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
