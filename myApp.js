let express = require('express');
let app = express();

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
    res.json({"message": "Hello json"});
})





































 module.exports = app;
