import pool from '../modules/pool.js';

// GET upcoming classes
export const getUpcomingClasses = async (req, res) => {
  try {
    const now = new Date().toISOString();
    const result = await pool.query(
      "SELECT * FROM class_events WHERE date > $1 ORDER BY date ASC",
      [now]
    );
    res.json(result.rows);
  } catch (err) {
    console.error("Error fetching classes:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// POST create class
export const createClassEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO class_events (title, description, date, location) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, description, date, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating class:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT update class
export const updateClassEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location } = req.body;
  try {
    const result = await pool.query(
      "UPDATE class_events SET title = $1, description = $2, date = $3, location = $4 WHERE id = $5 RETURNING *",
      [title, description, date, location, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error updating class:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE class
export const deleteClassEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM class_events WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error("Error deleting class:", err);
    res.status(500).json({ error: "Server error" });
  }
};
