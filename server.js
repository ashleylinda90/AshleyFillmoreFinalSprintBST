 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');
 const expressLayouts = require('express-ejs-layouts');

 const app = express();

 app.use(bodyParser());
 app.use(cors());
 app.use(expressLayouts);
 
 app.set('views', path.join(__dirname,'views'));
 app.set('view engine', 'ejs');

 // main root page.
app.get('/', function(req, res) {
    res.render('index', {
        people: [
            { name: "Dave" }, 
            { name: "Jerry" }, 
        ]
    });
});

// about page. 
app.get('/about', function(req, res) {
    res.render('about');
});

 app.listen(8000, function() {
     console.log(`Listening on port: 8000 .`)
 })

 // comment
