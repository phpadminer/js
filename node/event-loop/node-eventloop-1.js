// setTimeout(async () => {
//     console.log("timer1");
//     await Promise.resolve().then(function() {
//         console.log("promise1");
//     });
//     // console.log(111);
// });
//
// setTimeout(() => {
//     console.log("timer2");
//     Promise.resolve().then(function() {
//         console.log("promise2");
//     });
// });

// setTimeout(function () {
//     console.log(1);
// });
// console.log(2);
// process.nextTick(() => {
//     console.log(3);
// });
// new Promise(function (resolve, rejected) {
//     console.log(4);
//     resolve()
// }).then(res=>{
//     console.log(5);
// })
// setImmediate(function () {
//     console.log(6)
// })
// console.log('end');


async  function async1(){
    console.log(1);
    await async2();
    console.log(2);
}

async function async2(){
    console.log(3)
}

async1();

new Promise(function(resolve){
    console.log(4);
    resolve();
}).then(function(){
    console.log(5);
})
