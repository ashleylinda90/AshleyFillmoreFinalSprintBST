 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');

 const app = express();

 app.use(bodyParser());
 app.use(cors());
 
 app.set('views', path.join(__dirname,'views'));
 app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {
        world: "World"
    });
});

 app.listen(8000, function() {
     console.log(`Listening on port: 8000 .`)
 })

 // comment
