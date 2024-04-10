
const mongoose = require('mongoose');                   //ref
const url = "mongodb+srv://prachik3002:prachik3002@cluster0.8muaqrv.mongodb.net/major?retryWrites=true&w=majority&appName=Cluster0"  //from mongodb connect driver this link
mongoose.connect(url)

.then((result) => {                                               //thenc shorcut
    console.log('Connected to the database');
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;