//var x="sam" but data type is not supported in javascript.
var x:string="sam"
console.log("welcome to edubridge")

//tell about first line and second line. it is typescript.
//you want to run node filename.js. tell why we need js file to execute.
//now try to add this file in html to tell then ts file is working in browser.
//how to run in broser 
//<body> <script src="./varDemo.ts">- now go to inspect
//<body> <script src="./varDemo.js">- it will run in console. 
// that is why we say js is working in browser.

var username:string="sam"
var age:number= 30
var message:string=`hello`+username+"your age"+(age+1)+`in next year`
var anotherMsg:string=`hello ${username} your age is: ${age+1} in next year`
console.log(message)
console.log(anotherMsg)
