// import "@babel/polyfill";
let add = (x, y) => {
    return x + y;
};
//这是注释哦
const promise = new Promise(() => {
    setTimeout(() => {
        console.log(111);
        resolve();
    }, 2000);
});
console.log(add(1, 2));
console.log(promise);