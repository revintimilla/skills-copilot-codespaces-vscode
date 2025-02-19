//create a web service
// GET /comments - get all comments
// POST /comments - create a new comment
// PUT /comments/:id - update a comment
// DELETE /comments/:id - delete a comment

const express = require('express');
const router = express.Router();

let comments = [
    {id: 1, author: 'John', body: 'Hello, World!'},
    {id: 2, author: 'Jane', body: 'Hi there!'},
    {id: 3, author: 'John', body: 'How are you doing?'},
];

// GET /comments - get all comments
router.get('/', (req, res) => {
    res.json(comments);
});

// POST /comments - create a new comment
router.post('/', (req, res) => {
    const comment = {
        id: comments.length + 1,