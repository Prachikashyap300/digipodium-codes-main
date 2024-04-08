const express = require('express');
const app = express();
const port = 5000;

// Import the user router
const userRouter = require('./Routers/User');

// Use the user router in the app
app.use('/user', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});