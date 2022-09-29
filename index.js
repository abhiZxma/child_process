const express=require('express')
const { fork } = require('child_process');

const app=express()


//Routes For API's
app.get("/",(req,res)=>{
   res.status(200).send("Hello....")
 })
//For Testing Concurrency
app.get('/child1', (req, res) => {
  let data
  const forked_1 = fork('child_1.js');
  forked_1.send(`Sending Data To Child 1`);
  forked_1.on('message', (msg) => {
    console.log('Data Response from Child 1 --->', msg);
    data = msg
    res.send(
      {
        "Message":true,
        "data":data
      }
    )
  });
}) 

app.get('/child2',(req,res) =>{
  let data
  const forked_2 = fork('child_2.js');
  forked_2.send(`Sending Data To Child 2`);
  forked_2.on('message', (msg) => {
    console.log('Data Response from Child 2 --->', msg);
    data = msg
    res.send(
      {
        "Message":true,
        "data":data
      }
    )
  });
}) 

//For Testing Event Loop Multitasking 
// app.get('/test1',(req ,res) => {
//   res.send(
//     {
//       "message":true , 
//       "data":longComputation('test1')
//     }
//   )
// })

// app.get('/test2',(req ,res) => {
//   res.send(
//     {
//       "message":true , 
//       "data":longComputation('test2')
//     }
//   )
// })

// const longComputation = (param) => {
//   let sum = 0;
//   console.log(`Param ${param}`);
//   for (let i = 0; i < 10; i++) {
//     console.log(`Iteration In Child ${param}  -${i}`);
//     for (let j = 0; j < 1e9; j++) {
//       sum += j;
//     };
//   };
//   return sum;
//   // process.send(sum)
// };

//Party Module Routes :-
app.get('/party/v1',(req , res) => {
  const get_party_forked = fork('./module/party/party')
  get_party_forked.send('start_party_v1')
  get_party_forked.on('message', (msg) => {
    console.log('Data Response from Party Module For V1 --->', msg);
    res.send(
      {
        "Message":true,
        "data":msg
      }
    )
  });
})

app.get('/party/v2',(req , res) => {
  const get_party_forked = fork('./module/party/party')
  get_party_forked.send('start_party_v2')
  get_party_forked.on('message', (msg) => {
    console.log('Data Response from Party Module For V2 --->', msg);
    res.send(
      {
        "Message":true,
        "data":msg
      }
    )
  });
})


app.get("/home",(req,res)=>{
  res.send({"message":true , "data": "No data"})
  // res.status(200).send("Hello Home")
})

let PORT=process.env.PORT || 8000

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
app.listen(PORT,console.log("server started running on 8000 "))


