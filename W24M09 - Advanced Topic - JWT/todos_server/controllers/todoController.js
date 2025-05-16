const express = require('express');
const validateToken = require('./../middlewares/validateToken');
const Todos = require('./../models/todoModel');

const todoController = express.Router();

todoController.get('/todosByUser', validateToken, (req, res) => {
    Todos.getTodosByUserId([req.userInfo.id])
        .then((result) => {
            return res.status(200).json({todos: result.rows});
        });
});


module.exports = todoController;
