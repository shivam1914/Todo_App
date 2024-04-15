const express = require('express');
const app = express();
const path = require('path');
const todoRoute = require("./routes/todoRoute");

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/v1', todoRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
