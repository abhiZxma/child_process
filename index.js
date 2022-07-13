const express=require('express')

const {fork}=require('child_process');
const child = fork("boom_bam.js");

child.send(29);

child.on("message",function (message) {
  console.log(`Message from child.js: ${message}`);

})
child.on("message2",function (message2) {
  console.log(`Message from child.js: ${message2}`);

})
// k
 const app=express()
 app.get("/",(req,res)=>{
   res.status(200).send("Hello....")
 })
 app.get("/home",(req,res)=>{
  res.status(200).send("Hello Home")
})

// exec('ls',(err,stdout,stderr)=>{
//     if(err){
//         console.log("error--------->",err.message)
//         return err
//     }
//     if(err){
//         console.log("stderr--------->",stderr)
//         return err
//     }
//     console.log("data--------->",stdout)

// })

// process.on('unhandledRejection', error => {
//   throw error
// })

 app.listen(8000,console.log("server started running on 8000 "))


