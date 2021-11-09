function delayToEcho(msg, cb) {
  setTimeout(() => {
    const err = Date.now() % 2 === 0 ? null : new Error();
    cb(err, msg);
  }, 3000);
}

// 正常调用
delayToEcho("msg", (err, msg) => {});

// 实现代码
function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      try {
        fn(...args, (err, msg) => {
          if (err) {
            reject(err)
          }
          resolve(msg)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

promisify(delayToEcho)("msg")
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(err);
  });