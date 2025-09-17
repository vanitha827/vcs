let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Practice Express", completed: true },
];

const getTasks = () => tasks;

const getTaskById = (id) => tasks.find(t => t.id === id);

const addTask = (task) => {
  task.id = tasks.length + 1;
  tasks.push(task);
  return task;
};

const updateTask = (id, updatedTask) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...updatedTask };
    return tasks[index];
  }

  return null;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    return tasks.splice(index, 1)[0];
  }
  return null;
};

module.exports = { getTasks, getTaskById, addTask, updateTask, deleteTask };
