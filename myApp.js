let express = require('express');
let app = express();

//Part of Ex.6 This is to load the environment varibles
require('dotenv').config();


//Ex.7 Middlewares
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} ${req.ip}`);
  next()
})


//To use middleware functions, mount the functions to app.use()
//Ex.4 Serve Static Assets

app.use('/public', express.static(__dirname + '/public'));

//Ex.1
//console.log('Hello World');

//Ex.2
/*app.get('/', (req, res) => {
  res.send('Hello Express');
})*/

//Ex.3 Send Static files

app.get('/', (req, res) => {
    absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
})

//Ex.5 Serve JSON on a Specific Route
  
app.get('/json', (req, res) => {
  if(process.env['MESSAGE_STYLE'] === 'uppercase') {
    res.json({"message": "HELLO JSON"});
  }
  else {
     res.json({"message":  "hello json"});
     }
})




































 module.exports = app;
