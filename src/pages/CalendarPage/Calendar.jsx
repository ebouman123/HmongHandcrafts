import { useEffect, useState } from "react";
import HomeButton from "../../components/HomeButton";

function getDateKey(dateStr) {
  const date = new Date(dateStr);
  return date.toISOString().split("T")[0];
}

function CalendarPage() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [expandedEventId, setExpandedEventId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/calendar/upcoming")
      .then((res) => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  const eventsByDate = events.reduce((acc, event) => {
    const key = getDateKey(event.date);
    acc[key] = acc[key] || [];
    acc[key].push(event);
    return acc;
  }, {});

  const today = new Date();
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());

  const monthName = new Date(calendarYear, calendarMonth).toLocaleString(
    "default",
    {
      month: "long",
    }
  );

  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();

  const handleDateClick = (day) => {
    const date = new Date(calendarYear, calendarMonth, day);
    setSelectedDate(getDateKey(date));
    setShowModal(false);
    setExpandedEventId(null);
  };

  const toggleEvent = (id) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  const visibleEvents = selectedDate
    ? eventsByDate[selectedDate] || []
    : events;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <HomeButton />
      <h2 className="text-3xl font-bold text-razzmatazz-500 mb-6 text-center">
        Upcoming Free Classes
      </h2>

      <div className="text-center mb-6">
        <button
          onClick={() => setShowModal(true)}
          className="bg-kelly_green-500 hover:bg-kelly_green-600 text-white px-6 py-2 rounded-full font-semibold shadow"
        >
          View Calendar
        </button>
        {selectedDate && (
          <button
            onClick={() => setSelectedDate(null)}
            className="ml-4 text-sm text-risd_blue-500 underline hover:text-risd_blue-700"
          >
            Show all events
          </button>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-400 hover:text-gray-600"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  if (calendarMonth === 0) {
                    setCalendarMonth(11);
                    setCalendarYear((y) => y - 1);
                  } else {
                    setCalendarMonth((m) => m - 1);
                  }
                }}
                className="text-sm text-gray-600 hover:text-razzmatazz-500"
              >
                ← Prev
              </button>
              <h3 className="text-2xl font-bold text-razzmatazz-500">
                {monthName} {calendarYear}
              </h3>
              <button
                onClick={() => {
                  if (calendarMonth === 11) {
                    setCalendarMonth(0);
                    setCalendarYear((y) => y + 1);
                  } else {
                    setCalendarMonth((m) => m + 1);
                  }
                }}
                className="text-sm text-gray-600 hover:text-razzmatazz-500"
              >
                Next →
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold text-gray-600 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: firstDayIndex }).map((_, idx) => (
                <div key={`blank-${idx}`} />
              ))}
              {Array.from({ length: daysInMonth }).map((_, idx) => {
                const day = idx + 1;
                const dateKey = getDateKey(
                  new Date(calendarYear, calendarMonth, day)
                );
                const hasEvent = !!eventsByDate[dateKey];
                return (
                  <button
                    key={day}
                    className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md transition text-base font-medium ${
                      hasEvent
                        ? "bg-icterine-500 hover:bg-icterine-600 text-black"
                        : "text-gray-400 bg-gray-100 cursor-not-allowed opacity-60"
                    }`}
                    onClick={() => hasEvent && handleDateClick(day)}
                    disabled={!hasEvent}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6 mt-6">
        {visibleEvents.map((e) => {
          const isExpanded = expandedEventId === e.id;
          const dateObj = new Date(e.date);
          return (
            <div
              key={e.id}
              onClick={() => toggleEvent(e.id)}
              className="cursor-pointer border border-gray-300 rounded-xl p-6 shadow-md bg-white transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase text-razzmatazz-500 mb-1">
                    {dateObj.toLocaleDateString(undefined, {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <h3 className="text-lg font-semibold text-kelly_green-700">
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-600">{e.location}</p>
                </div>
                <span className="text-2xl text-gray-400">
                  {isExpanded ? "−" : "+"}
                </span>
              </div>
              {isExpanded && (
                <p className="text-gray-700 mt-3">{e.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarPage;
