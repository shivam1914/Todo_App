const express = require("express");
const router = express.Router();


const { getAllTasks } = require("../controllers/getAllTasks");
const { addTask } = require("../controllers/addTask");
const { updateStatus } = require("../controllers/updateStatus");
const {deleteTask} = require("../controllers/deleteTask");
const {updateTask} = require("../controllers/updateTask");

router.get("/tasks/todo", getAllTasks);
router.post("/addtask", addTask);
router.put("/updatetaskstatus", updateStatus);
router.delete("/deletetask", deleteTask);
router.put("/updatetask", updateTask);

module.exports = router;
