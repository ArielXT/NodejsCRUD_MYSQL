
var router=require('express').Router();
const { query } = require('../database/connection');
var connection=require('../database/connection');
var queries=require('../database/queries/agenda');

router.get('/lista', (req,res)=>{
    connection.query(queries.listar,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/agendas',{agenda:result});
        }
    })
})

router.get('/editar/:id',(req,res)=>{
    connection.query(queries.agenda(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render('templates/editar',{agenda:result});
        }
    })
})
router.post('/editar/:id',(req,res)=>{
    var data={
        id: req.params.id,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        fecha_nac:req.body.fecha_nac,
    }
    connection.query(queries.actualizar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/agenda/lista');
        }
    })
})
router.get('/eliminar/:id',(req,res)=>{
    connection.query(queries.eliminar(req.params.id),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/agenda/lista');
        }
    })
})

router.get('/agregar',(req,res)=>{
    res.render('templates/agregar');
})

router.post('/agregar',(req,res)=>{
    var data={
        id: req.body.id,
        nombre:req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        fecha_nac:req.body.fecha_nac,
    }
    connection.query(queries.agregar(data),(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect('/agenda/lista');
        }
    })
})
module.exports=router;