const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const updateStatus = async(req, res) => {
  const { id, status } = req.body;
  console.log(id, status)
  try {
    let tasksData = fs.readFileSync(tasksFilePath, 'utf8');
    let tasks = JSON.parse(tasksData);
    const taskToUpdate = tasks.find(task => task.id === id);
    if (taskToUpdate) {
      taskToUpdate.status = status;
      fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
      res.send('Status updated');
    } else {
      res.status(404).send('Task not found.');
    }
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {updateStatus}
