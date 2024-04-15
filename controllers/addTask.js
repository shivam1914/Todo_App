const fs = require('fs');
const path = require('path');

const tasksFilePath = path.join(__dirname, '../tasks.json');

const addTask = (req, res) => {
  const { title, status } = req.body;
  console.log(title, status);
  try {
  //  console.log("hello")
    const tasksData = fs.readFileSync(tasksFilePath, 'utf8');
    //console.log("hello")
    const tasks = JSON.parse(tasksData);
    const newTask = { id: Date.now().toString(), title, status };
    tasks.push(newTask);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(201).send(newTask);
  } catch (error) {
    console.error('Error adding task:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { addTask };