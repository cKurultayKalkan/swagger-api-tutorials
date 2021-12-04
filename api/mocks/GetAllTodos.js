module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req,res,next){
        res.json([
            {
                todo_id: 0,
                todo: "Get some milk",
                author: "Jim",
                createddate: "2021-12-04T15:44:00.000Z",
                duedate: "2021-12-21T15:44:00.000Z",
                completed: false
            },
            {
                todo_id: 1,
                todo: "Get some cereal",
                author: "Austin",
                createddate: "2021-12-04T15:44:00.000Z",
                duedate: "2021-12-22T15:44:00.000Z",
                completed: false
            }
        ])
}
