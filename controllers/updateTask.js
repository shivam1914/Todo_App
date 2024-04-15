const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const updateTask = async(req, res) => {
  const { id, title } = req.body;
  try {
    let tasksData = fs.readFileSync(tasksFilePath, 'utf8');
    let tasks = JSON.parse(tasksData);
    const taskToUpdate = tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.title = title;
      fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
      res.send('Task updated');
    } else {
      res.status(404).send('ID not found');
    }
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {updateTask}

