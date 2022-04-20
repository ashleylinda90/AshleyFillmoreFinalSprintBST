 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');
 const expressLayouts = require('express-ejs-layouts');
 const resultsRouter = require('./routes/results');


 const app = express();


 app.use(bodyParser());
 app.use(cors());
 app.use(expressLayouts);
 

 app.set('views', path.join(__dirname,'views'));
 app.set('view engine', 'ejs');


 // main root route.
app.get('/', (req, res) => {
    res.render('index', {
        people: [
            { name: "Dave" }, 
            { name: "Jerry" }, 
        ]
    });
});

// about route. 
app.get('/about', function(req, res) {
    res.render('about');
});

// Public folder for images.
app.use(express.static('public'))

// input route
app.use('/results', resultsRouter); // may have to change input to the second route needed. (bst output).

app.listen(8000, function() {
    console.log(`Listening on port: 8000 .`)
    })

// comment
