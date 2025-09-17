const taskService = require('../../service/TaskService');

const getAllTasks = (req, res) => {
  res.json(taskService.getTasks());
};

const getTask = (req, res) => {
  const task = taskService.getTaskById(parseInt(req.params.id));

  if (task) res.json(task);

  else res.status(404).json({ message: "Task not found" });
};

const createTask = (req, res) => {
  const newTask = taskService.addTask(req.body);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const updated = taskService.updateTask(parseInt(req.params.id), req.body);

  if (updated) res.json(updated);
  else res.status(404).json({ message: "Task not found" });
};

const deleteTask = (req, res) => {
  const deleted = taskService.deleteTask(parseInt(req.params.id));
  if (deleted) res.json(deleted);
  else res.status(404).json({ message: "Task not found" });
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
