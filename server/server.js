import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import calendarRoutes from "./routes/calendar.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/calendar", calendarRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
