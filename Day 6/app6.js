//! map()

// let nums = [5,8,6,4,9,1]
// console.log(nums);

// let res = nums.map(num=>num*25)
// console.log(res);


//! reduceRight() without seecond argument
let numbers = [3,1,4,2]
let res1 = numbers.reduceRight((a, b, c, d)=>
{
    console.log(a);
    return a+b
})

console.log(res1);


//! reduceRight() with second argument
// let numbers = [3,1,4,2]
// let res1 = numbers.reduceRight((a, b, c, d)=>
// {
//     console.log(a);
//     return a+b
// }, 2)

// console.log(res1);