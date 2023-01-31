let express = require('express');
let app = express();

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



































 module.exports = app;
