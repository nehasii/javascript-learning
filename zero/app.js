//! Magic 8 ball program

// let userName='Neha';
// userName? console.log(`Hello, ${userName}!`): console.log('Hello!');

// let userQuestion = 'will i get a good paying job soon?';
// console.log(`${userName} asked- ${userQuestion}`)

// let randomNumber = Math.floor(Math.random() * 8)
// console.log(randomNumber)
// let eightBall = '';

// switch(randomNumber){
//   case 0: 
//   eightBall = 'It is certain';
//   break;
//   case 1: 
//   eightBall = 'It is decidedly so';
//   break;
//   case 2: 
//   eightBall = 'Reply hazy try again';
//   break;
//   case 3: 
//   eightBall = 'Cannot predict now';
//   break;
//   case 4: 
//   eightBall = 'Do not count on it';
//   break;
//   case 5: 
//   eightBall = 'My sources say no';
//   break;
//   case 6: 
//   eightBall = 'Outlook not so good';
//   break;
//   case 7: 
//   eightBall = 'Signs point to yes';
//   break;
// }

// console.log(eightBall)


//! racer program
// let raceNumber = Math.floor(Math.random() * 1000);
// const registeredEarly = true;
// let runnerAge = 19;
// if (runnerAge > 18 && registeredEarly === true){
//   raceNumber += 1000
// }

// if (runnerAge > 18 && registeredEarly === true){
//   console.log(`Runner with race number ${raceNumber} will race at 9:30 am`)
// }
// else if (runnerAge > 18 && registeredEarly === false){
//   console.log(`Runner with race number ${raceNumber} will race at 11:00 am`)
// }
// else if (runnerAge < 18){
//   console.log(`Youth registrants with race number ${raceNumber} run at 12:30 pm (regardless of registration)`)
// }
// else{
//   console.log('Please check with the registeration desk')}


//! reverse a string using inbuilt methods

// let s = 'javascript';
// let res = s.split("");
// console.log(res.reverse());


// ! total no. of given array numbers without using inbuilt methods

// let numbers = [4,5,6,7,8,9]
// let sum = 0
// for (let element of numbers){
//     sum += element;
// }
// console.log(sum);

// ! filter with and without using inbuilt

// let places = ['karwar','margao','udupi', 'mangalore','bangalore','belgaum']
// console.log(places);
// let res = places.filter(place =>
//     {
//        return 
//     }

// )
// console.log(res);

// let i ='abc';
// for(let i=1; i<=10; i++)
// {
//     console.log(i);
//     let i = 10;
//     console.log(i);
// }
// console.log(i);


// ! krishna's

// let a ={b:'c',c:'d',d:function(){return this.b+this.c}, e:['a','b','c']};
// function x()
// {
//     console.log(a.c);
//     console.log(a.d);
//     return y();
// }
// let y = () =>5;
// let z = function()
// {
//     a.c=1
//     return x()+a.e
// }
// z();
// console.log(z());


//! Destructuring

//? Array Destructuring

// let colors = ['red', 'pink', 'yellow', 'orange']

//* case 1
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[3]);

// * case 2 
// let r = colors[0];
// let p = colors[1];
// let y = colors [2];
// let o = colors [3];
// console.log(r,p,o);

// * case 3 using destructuring

// & 1.
// let [r , p ,y, o]= colors;
// console.log(r,p,y,o);

// & 2.
// let [r ,,y, o]= colors;
// console.log(r,y,o);

// & 3.
// let [r,p,...c]=colors;
// console.log(r,p,c);

// & 5.
// let getColors = ([r,p,y])=>{
//     console.log(r,p,y);
// }
// getColors(colors)

//& 6.
// let getNUmber = ()=>{
//     return [2,7];
// }
// let res = getNUmber();
// console.log(res);

// & 7.
// let getNUmber = ()=>{
//     return [2,7];
// }
// let res = getNUmber();
// let [a,b]=res;
// console.log(a,b);


// & 8.
// let getNUmber = ()=>{
//     return [2,7];
// }
// let [a,b] = getNUmber();
// console.log(a,b);


// let a = [{sname:'neha', age:22},{address:{home:{city:"bangalore", state:"karnataka"},work:"bombay"}}];
// let [ob1,ob2]= a;
// console.log(ob1,ob2);
// let {sname,age}=ob1;
// let {address:{home:{city,state},work}}=ob2;
// console.log(sname, city, work );


// ! Date 
// let d=new Date()


// let s;
// let d_mon
// let d_date
// function getDate(d){
//     d_mon=d.getMonth()+1;
//     d_date = d.getDate();
//     if(d_mon<10)
//     {
//         d_mon="0"+d_mon
//     }
//     if(d_date<10)
//     {
//         d_date="0"+d_date
//     }
//     console.log(d.getFullYear()+"-"+d_mon+"-"+d_date);
    // console.log(d.getDate()+"-"+d.toLocaleDateString("en-IN",{month:"short"})+"-"+d.getFullYear());
// }
// getDate(new Date("2001-11-2"))


// function getDate2(d){
//     let d_mon = d.getMonth()
//     switch(d_mon)
//     {
//         case 0:d_mon="jan";
//         break;
//         case 1:d_mon="feb";
//         break;
//         case 2:d_mon="mar";
//         break;
//         case 3:d_mon="apr";
//         break;
//         case 4:d_mon="may";
//         break;
//         case 5:d_mon="june";
//         break;
//         case 6:d_mon="july";
//         break;
//         case 7:d_mon="aug";
//         break;
//         case 8:d_mon="sept";
//         break;
//         case 9:d_mon="oct";
//         break;
//         case 10:d_mon="nov";
//         break;
//         case 11:d_mon="dec";
//         break;
//     }
    
//     console.log(d.getFullYear()+"-"+d_mon+"-"+d.getDate());
// }
// getDate2(new Date(20))


//! DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM 
// let a = document.getElementById("demo")
// console.log(a);

// let b = document.getElementById("test")
// console.log(b);

// console.log(document);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

// document.title = "DOM"

// ! local storage
// localStorage.setItem('sname', "neha")
// localStorage.setItem('age', "21")
// console.log(localStorage.key(1));