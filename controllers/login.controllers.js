const express=require('express')
const serive=require('./login.service')
const router=express.Router()
const { fork } = require('child_process');
module.exports=router


router.get('/abc',(req,res,next)=>{
    const forked=fork('controllers/login.service.js')
    forked.send({ id: 1 });
    serive.getsum()
    .then((data)=>res.status(200).send(data))
    .catch(er=>{next('er')})
    
})
router.get('/abc2',(req,res,next)=>{
    const forked=fork('controllers/login.service.js')
    forked.send({ id: 2 });
    serive.getsum2()
    .then((data)=>res.status(200).send(data))
    .catch(er=>{next('er')})
    
})