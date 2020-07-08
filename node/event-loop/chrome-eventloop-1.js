// 位置 1
setTimeout(function () {
    console.log('timeout1');
  }, 0);
  
  // 位置 2
  console.log('start');
  
  // 位置 3
  Promise.resolve().then(function () {
    // 位置 5
    console.log('promise1');
    // 位置 6
    Promise.resolve().then(function () {
      console.log('promise2');
    });
    // 位置 7
    setTimeout(function () {
      // 位置 8
      Promise.resolve().then(function () {
        console.log('promise3');
      });
      // 位置 9
      console.log('timeout2')
    }, 0);
  });
  
  // 位置 4
  console.log('done');

