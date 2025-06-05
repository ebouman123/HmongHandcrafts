import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import Layout from "../../components/Layout/Layout.jsx";
import "./calendar.css";

function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/calendar/upcoming")
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  const datesWithEvents = events.map((e) => new Date(e.date));

  return (
    <Layout>
      <div>
        <h2>Upcoming Free Classes</h2>
        <Calendar
          tileClassName={({ date }) =>
            datesWithEvents.some(
              (d) => d.toDateString() === date.toDateString()
            )
              ? "highlight"
              : null
          }
        />
        <ul>
          {events.map((e) => (
            <li key={e.id}>
              <strong>{new Date(e.date).toLocaleString()}</strong> - {e.title} @{" "}
              {e.location}
              <p>{e.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default CalendarPage;
