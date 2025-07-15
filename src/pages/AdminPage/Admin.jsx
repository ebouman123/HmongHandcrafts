import { useEffect, useState } from "react";
import "./Admin.css";
import HomeButton from "../../components/HomeButton";
import Toast from "../../components/Toast";

function AdminPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });

  const [classes, setClasses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [notification, setNotification] = useState("");

  const fetchClasses = () => {
    fetch("http://localhost:3000/calendar/upcoming")
      .then((res) => res.json())
      .then(setClasses)
      .catch(console.error);
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  useEffect(() => {
    if (editingId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [editingId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => setNotification(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:3000/calendar/${editingId}`
      : "http://localhost:3000/calendar";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setFormData({ title: "", description: "", date: "", location: "" });
        setEditingId(null);
        fetchClasses();
        setNotification(
          editingId
            ? "Class updated successfully."
            : "Class added successfully."
        );
        setTimeout(() => setNotification(""), 3000);
      })
      .catch(console.error);
  };

  const handleEdit = (classData) => {
    setFormData({
      title: classData.title,
      description: classData.description,
      date: classData.date.slice(0, 16),
      location: classData.location,
    });
    setEditingId(classData.id);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this class?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/calendar/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setNotification("Class deleted successfully.");
        fetchClasses();
        setTimeout(() => setNotification(""), 3000);
      })
      .catch((err) => {
        console.error(err);
        setNotification("Failed to delete class.");
      });
  };

  return (
    <div className="admin-container">
      <HomeButton />
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
        <button type="submit">
          {editingId ? "Update Class" : "Add Class"}
        </button>
      </form>
      {notification && <Toast message={notification} onClose={handleClose} />}

      <div
        className={editingId ? "blur-sm opacity-60 pointer-events-none" : ""}
      >
        <h3>Existing Classes</h3>
        <ul className="class-list">
          {classes.map((c) => (
            <li key={c.id}>
              <strong>{c.title}</strong> on {new Date(c.date).toLocaleString()}{" "}
              at {c.location} <br />
              <em>{c.description}</em> <br />
              <button onClick={() => handleDelete(c.id)}>Delete</button>
              <button onClick={() => handleEdit(c)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminPage;
