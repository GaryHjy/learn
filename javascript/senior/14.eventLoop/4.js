function ELoop() {
  // 当前任务 
  let p = new Promise((resolve, reject) => { 
    console.log("current Task") // 1
    resolve()
  }); 
  let nextP;

  setTimeout(() => {
    console.log("MacroTask_1"); // 5
    nextP.then(() => {
      console.log("MicroTask_promise_1"); // 7
    })
    console.log("MacroTask_1 end") // 6
  }, 0)

  setTimeout(() => {
    console.log("MacroTask_2"); // 8
    console.log("MacroTask_2 end") // 9
  }, 0)

  nextP = p.then(() => {
    console.log("MicroTask_promise_2"); // 3
  }).then(() => {
    console.log("MicroTask_promise_3"); // 4
  })

  console.log("current Task end") // 2
}

ELoop()