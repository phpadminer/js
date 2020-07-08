/*
 * @Descripttion : 手写一个eventhub(也叫发布订阅模式)
 * @[tip]        : 1. 
 * @version      : v.1.0.0
 * @Author       : ghosthao
 * @Date         : 2020-05-19 19:11:43
 */ 
function Eventhub () {
    this.cache = {};
    this.on = (eventName,fn)=>{
        this.cache[eventName] = this.cache[eventName] || []
        if(Object.prototype.toString.call(fn) === "[object Function]" ){
            this.cache[eventName].push(fn) 
        } 
    }
    this.emit = (eventName,data = null)=>{
        (this.cache[eventName] || []).forEach(fn => {
            fn && fn(data);
        });
    }
    this.off = (eventName,fn)=>{
        if(this.cache[eventName] === undefined) return 
        for(let i = 0;i<this.cache[eventName].length;i++){
            if(this.cache[eventName][i] === fn){
                this.cache[eventName].splice(i,1);
                break;
            }
        }
    }
}

let event1 = new Eventhub();
const fn1 = ()=>{
    console.log(1111);
}
const fn2 = ()=>{
    console.log(2222);
}
event1.on('test1',fn1)
event1.on('test1',fn2)

event1.off('test1',fn1)
event1.emit('test1');
console.dir(event1.cache);