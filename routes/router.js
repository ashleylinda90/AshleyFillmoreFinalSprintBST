// routes page
const express = require('express');
const app = express();

// main root route.
app.get('/', (req, res) => {
  res.render('index');
});

// about route.
app.get('/bst', (req, res) => {
  res.render('bst');
});

app.get('/results', (req, res) => {
  res.render('results');
});


app.post('/bst', (req, res) => {
    res.render('bst');
});


module.exports = app;
