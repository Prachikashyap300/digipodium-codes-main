const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

// Import the user router
const userRouter = require('./Routers/User');

app.use(cors({
  origin: ['http://localhost:5174']
}))
// Use the user router in the app
//middleware
app.use(express.json);
app.use('/User', userRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});