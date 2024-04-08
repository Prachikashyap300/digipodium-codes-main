const mongoose = require('mongoose');
const url ='mongodb+srv://prachik300:<password>@cluster0.7ljuqhi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url)

.then((result) => {
    console.log('connected to the database');
}).catch((err) => {
    console.log(err)
    
});
module.exports = mongoose;