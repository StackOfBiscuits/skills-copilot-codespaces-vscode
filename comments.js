//Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const comments = require('./comments.json');
const fs = require('fs');

app.use(bodyParser.json());
app.use(cors());

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {
        id: comments.length + 1,
        ...req.body
    };
    comments.push(newComment);
    fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
        if (err) {
            console.log(err);
        }
        res.json(newComment);
    });
});

app.listen(3000, () => {
    console.log('Server started');
});