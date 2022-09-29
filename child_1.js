process.on('message', (msg) => {
    console.log('Message from Index JS in Child 1:', msg);
    const sum = longComputation();
    process.send(sum);
});

// let counter = 0;

// setInterval(() => {
//     // process.send({ counter: counter++ });
//     process.send(`The Value Of Counter In Child 1 ---> Counter : ${counter ++}`);
// }, 1000);

const longComputation = () => {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      console.log(`Iteration In Child 1  -${i}`);
      for (let j = 0; j < 1e9; j++) {
        sum += j;
      };
    };
    return sum;
    // process.send(sum)
  };


// process.on('message', (msg) => {
//     const sum = longComputation();
//     process.send(sum);
//   });