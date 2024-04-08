const express = require('express')
const app = express();
const port = 5000;

const userRouter= ('./Routers/User');

//middleware
app.use(express.json());
app.use('user', userRouter)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})