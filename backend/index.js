const express = require('express');
const app = express();
const port = 4000;

const userRouter = require('./Routers/User');

//middleware for this mongodb is use

app.use(express.json());
app.use('/User', userRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});