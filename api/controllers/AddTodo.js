'use strict';
var client = require('../helpers/es')

module.exports = {
    AddTodo: AddTodo
}

function AddTodo(req,res){
    client.create({
        index:'todo',
        type:'todo',
        id: req.swagger.params.todo.value.todo_id,
        body: req.swagger.params.todo.value
    }, (error)=>{
        res.header('Content-Type', 'application/json')
        if(error){
            console.log(error);
            res.statusCode = 409;
            res.end(JSON.stringify(error))
        } else {

        }
    })
}
