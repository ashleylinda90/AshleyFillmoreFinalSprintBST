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

app.post('/bst', (req, res) => {
  res.render('bst');
});

app.get('/results', (req, res) => {
  let results = [];
  res.render('results', { results });
});

app.post('/results', (req, res) => {
  let input = req.body.input;
  let split = input.split(',');
  let results = split;
  res.render('results', { results });
});

module.exports = app;
