 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const path = require('path');
 const expressLayouts = require('express-ejs-layouts');
 const resultsRouter = require('./routes/router');


 const app = express();


 app.use(bodyParser());
 app.use(cors());
 app.use(expressLayouts);
 

// set template engine
 app.set('views', path.join(__dirname,'views'));
 app.set('view engine', 'ejs');


// Public folder for images.
app.use(express.static('public'))


const indexRouter = require('./routes/router');
app.use('/', indexRouter);


app.listen(8000, () => {
    console.log(`Listening on port: 8000 .`)
    })

// comment
