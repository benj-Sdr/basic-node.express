let express = require('express');
let app = express();

//Part of Ex.6 This is to load the environment varibles
require('dotenv').config();

//part of ex.11 
let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded( {extended: false}) );

//Ex.7 Middlewares
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
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
//Ex.8 Chaining Middleware functions 

app.get('/now', 
    function(req, res, next) {
      let d = new Date();
      req.time = d.toString();
      next();
    }, 
    (req, res) => {
      res.json({
        time: req.time
      })
    }
)

//Ex.9 req.params
app.get('/:word/echo', (req, res) => {
  res.json( {echo: req.params.word} );
  
})

//Ex.10 req.query
app.get('/name', (req, res) => {
  res.json( {name: req.query.first + ' ' + req.query.last} )
})





































 module.exports = app;
