console.clear

console.log("Day 2");

//? ********************************** VAR **********************************
//& DEC & INITIALIZATION SEPERATELY
var a 
a = 20
console.log(a);


//& DEC & INIT ON THE SAME LINE POSSIBLE ALSO R-DEC & R-INITIALIZATION POSSIBLE
var a = 200
console.log(a);


//& you have to use print statement (clg) to show the data in the output
var a = 150
console.log(a);


//? ********************************** LET **********************************
//& DEC & INITIALIZATION SEPERATELY AND ON THE SAME LINE POSSIBLE
let b
b = 25
console.log(a);

b = 5000
console.log(a);

//& R-DEC IS NOT POSSIBLE
// let b = 300
// console.log(a); // will throw an error


//& R-DEC & R-INT ON THE SAME LINE IS NOT POSSIBLE SINCE R-DEC IS NOT POSSIBLE
// let b = 5000 // will throw an error


//? ********************************** CONST **********************************

//& ONLY DEC IS NOT POSSIBLE OR DEC & INT ON DIFFERENT LINE IS ALSO NOT POSSIBLE, HAVE TO INITIALIZE ON THE SAME LINE
const c = 600
console.log(c); 

//& R-INIT IS NOT POSSIBLE
c = 450
console.log(c); // will throw an error
