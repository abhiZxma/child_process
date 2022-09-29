const process = require('process');

module.exports={
    longComputation
}

function longComputation(param){
    let sum = 0;
    console.log(`Param ${param}`);
    for (let i = 0; i < 5; i++) {
      console.log(`Iteration In Child ${param}  -${i}  Process ID -> ${process.pid}`);
      for (let j = 0; j < 1e9; j++) {
        sum += j;
      };
    };
    return sum;
}
// const longComputation = (param) => {
//     let sum = 0;
//     console.log(`Param ${param}`);
//     for (let i = 0; i < 10; i++) {
//       console.log(`Iteration In Child ${param}  -${i}`);
//       for (let j = 0; j < 1e9; j++) {
//         sum += j;
//       };
//     };
//     return sum;

// };