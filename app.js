const _= require("lodash");
const inverval = require("./2-setInterval");

const exemplo = inverval.setInterval(()=>{
    console.log('teste do app')
}, 2000)

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)
console.log("hello people")

