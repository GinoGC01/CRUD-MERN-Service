import Task from "../models/task.models.js";

export const getTasks = async (req, res) => {
  const { id } = req.user;
  const tasks = await Task.find({
    user: id,
  }).populate("user"); //agrega todos los datos del user (user esta en req.user)
  res.json(tasks);
};
export const createTask = async (req, res) => {
  const { title, description, date } = req.body;
  const { id } = req.user;

  const newTask = new Task({
    title,
    description,
    date,
    user: id,
  });

  const savedTask = await newTask.save();
  res.json(savedTask);
};
export const getTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body; //nuevos datos
  const task = await Task.findByIdAndUpdate(id, updateInfo, { new: true }); // dato nuevo
  if (!task) return res.status(404).json({ message: "task not found" });
  res.json(task);
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndDelete(id);

  if (!task) return res.status(404).json({ message: "task not found" });
  res.json({ message: "Task deleted" });
};
