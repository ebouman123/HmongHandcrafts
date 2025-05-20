import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Bio from "./pages/Bio";
import Calendar from "./pages/CalendarPage/Calendar";
import Admin from "./pages/Admin";
import "./App.css"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">Bio</Link> | <Link to="/calendar">Calendar</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
