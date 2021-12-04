'use strict'
const client = require('../helpers/es');

module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req,res){
    client.search({
    index: 'todo',
        type:'todo',
        q: '*',
        _sourceInclude: "todo_id, todo, completed, tags, author, completeddate, duedate"
    }, function(err, response){
        if(err) {
            res.end(JSON.stringify(err))
        }  else {
            const results = response.hits.hits.map(hit=>hit._source)
            res.header('Content-Type', 'application/json')
            res.end(JSON.stringify(results))
        }
    })
}
