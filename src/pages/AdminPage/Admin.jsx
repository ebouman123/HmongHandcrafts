import { useEffect, useState } from "react";
import "./Admin.css"

function AdminPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const [classes, setClasses] = useState([]);

  const fetchClasses = () => {
    fetch("http://localhost:3000/calendar/upcoming")
      .then((res) => res.json())
      .then(setClasses)
      .catch(console.error);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/calendar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setFormData({ title: "", description: "", date: "", location: "" });
        fetchClasses();
      })
      .catch(console.error);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/calendar/${id}`, {
      method: "DELETE",
    })
      .then(fetchClasses)
      .catch(console.error);
  };

  return (
      <div className="admin-container">
        <h2 className="admin-header">Admin: Manage Classes</h2>

        <form className="admin-form" onSubmit={handleSubmit}>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            required
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
          />
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button type="submit">Add Class</button>
        </form>

        <h3>Existing Classes</h3>
        <ul className="class-list">
          {classes.map((c) => (
            <li key={c.id}>
              <strong>{c.title}</strong> on {new Date(c.date).toLocaleString()}{" "}
              at {c.location} <br />
              <em>{c.description}</em> <br />
              <button onClick={() => handleDelete(c.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default AdminPage;
