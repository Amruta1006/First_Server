import express from "express";
import {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
  updateAge,
} from "../controllers/student.js";

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", addStudent);
router.delete("/students/:id", deleteStudent);
router.put("/students/:id", updateStudent);
router.patch("/students/:id", updateAge);

export default router;
