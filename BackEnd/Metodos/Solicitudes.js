const express = require('express')
const main = require('./Conection'); 
const router = express.Router()

module.exports = router

router.post("/MostrarTodo", async (req,res) =>{
    const query = "select * from Todo"
    main(query).then(result =>{
        res.json(result.recordset)
    }).catch(err =>{
        console.error(err)
    })
})

router.post("/GuardarTodo", async (req,res) =>{
    const query = `exec [React_TSX].[dbo].[Insertar] @title = '${req.body.title}',@completed = ${req.body.completed}`
    main(query).then(result =>{
        res.json(result.recordset)
    }).catch(err =>{
        console.error(err)
    })
})

router.post("/ActualizarTodoCompleted", async (req,res) =>{
    const query = `exec [React_TSX].[dbo].[ActualizarTodoCompleted] @id = ${req.body.id}, @completed = ${req.body.completed}`
    main(query).then(result =>{
        res.json(result.recordset)
    }).catch(err =>{
        console.error(err)
    })
})

router.post("/EliminarTodo", async (req,res) =>{
    const query = `delete [React_TSX].[dbo].[Todo] where id in (${req.body.id})`
    console.log(query)
    main(query).then(result =>{
        res.end("OK")
    }).catch(err =>{
        console.error(err)
    })
})