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

}

promisify(delayToEcho)("msg")
  .then(msg => {
    console.log(msg);
  })
  .catch(err => {
    console.log(err);
  });