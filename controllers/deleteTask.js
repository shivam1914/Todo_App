const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const deleteTask = (req, res) => {
  const { id } = req.body;
  try {
    let tasksData = fs.readFileSync(tasksFilePath, 'utf8');
    let tasks = JSON.parse(tasksData);
    const updatedTasks = tasks.filter(task => task.id !== id);
    if (tasks.length !== updatedTasks.length) {
      fs.writeFileSync(tasksFilePath, JSON.stringify(updatedTasks, null, 2));
      res.send('Task deleted successfully');
    } else {
      res.send('ID not found');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { deleteTask };