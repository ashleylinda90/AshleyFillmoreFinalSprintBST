// input results page

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("this route is for the results of the BST.")
});

module.exports = router;

