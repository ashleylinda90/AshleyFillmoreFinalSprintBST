// routes page

const express = require('express');
const router = express.Router();
const app = express();


 // main root route.
 app.get('/', (req, res) => {
    res.render('index');
    });


// about route. 
app.get('/bst', (req, res) => {
    res.render('bst');
});

app.get('/router', (req, res) => {
    res.render('router');
});

module.exports = app;

