const express = require('express'); //bringing in the npm express file into this file
const path = require('path')
let app = express(); //creating an instance for the express function here


//app.get('/', (req , res) => { //creating a call back for the get request
//res.send('Hello from the web server side...'); //responds to the request
//}); //making a get request using a function that will respond to the request



app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})


//app.use('/order/:id', (req, res) => {
  //  let id = req.params.id;
  //  res.send(id);
//})
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000); //listening on port 3000