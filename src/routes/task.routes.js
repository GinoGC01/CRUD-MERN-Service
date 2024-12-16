import { Router } from "express";
import { authRequired } from "../middlewares/validateTodken.js";
import {
  getTask,
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller.js";
import { taskSchema } from "../schemas/tasks.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
router.post("/tasks", authRequired, validateSchema(taskSchema), createTask);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, validateSchema(taskSchema), updateTask);

export default router;
