const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '..', 'tasks.json');

const getAllTasks = (req, res) => {
  try {
    const tasksData = fs.readFileSync(tasksFilePath, 'utf8');
    const tasks = JSON.parse(tasksData);
    res.json(tasks);
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getAllTasks }
