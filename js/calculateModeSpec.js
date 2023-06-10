// Write your own unit tests here!
var sp = require("./calculateMode");

console.log(sp.calculateMode([1,2,3,3]).length == 1)
console.log(sp.calculateMode([4.5, 0, 0]).length       == 1)
console.log(sp.calculateMode([1.5, -1, 1, 1.5]).length == 1)
console.log(sp.calculateMode([1,1,2,2]).length         == 2)
console.log(sp.calculateMode([1,2,3]).length           == 3)
console.log(sp.calculateMode(["who", "what", "where", "who"]).length == 1)