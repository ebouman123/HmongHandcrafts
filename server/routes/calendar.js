import express from "express";
import {
  getUpcomingClasses,
  createClassEvent,
  updateClassEvent,
  deleteClassEvent,
} from "../controllers/calendarController.js";

const router = express.Router();

router.get("/upcoming", getUpcomingClasses);
router.post("/", createClassEvent);
router.put("/:id", updateClassEvent);
router.delete("/:id", deleteClassEvent);

export default router;
