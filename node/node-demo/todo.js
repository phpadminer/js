/*
 * @Descripttion : 
 * @[tip]        : 1. 
 * @version      : 
 * @Author       : ghosthao
 * @Date         : 2020-06-15 10:23:32
 */ 
const fs = require('fs');
const agrvs = process.argv.splice(2);
const filePath = './db';
const fileContext = fs.readFileSync(filePath).toString();
console.log(fileContext);
const list =fileContext?JSON.parse(fileContext) : [];
list.push(agrvs[1]);
fs.writeFileSync(filePath,JSON.stringify(list));

