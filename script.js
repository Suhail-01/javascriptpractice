
// even no.

// for(let i = 1;i<=20;i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }


// 10 to 1 
// for(let i = 10;i>=1;i--){
//     console.log(i)
// }



// words repating 5 times
// for(let i = 1;i<=5;i++){
//     console.log("hello world")
// }



// even no 1 to 10 and odd no print "odd no"
// for(let i=1;i<=10;i++){
//     if(i%2 ===0){
//         console.log(`${i} - even no`)
//     }else if(i!==2){
//         console.log(`${i} - odd no`)
//     }
// }




// ask user for a number whether it is positive or negative using prompt plus conditionalsd
    // let n = prompt("Enter a number");
    // if(n>=0){
    //     console.log(` is positive no`);
    // }else{
    //     console.log(` is negative no`);
    // }




// ask user if they're eighteen above then he's eligible other than he's not
// let age = +prompt("Enter your age"); 
// if(age>=18){
//     console.log("he's eligible");
// }else{
//     console.log("he's not eligible");
// }




// When we enter multiple spaces in prompt enter what will get and after that if you click OK and cancel then we can modify it using this codei
// let age = prompt("Enter your age");
// if(age === null){
//     console.error("User cancelled the prompt.");
// }else{
//     if(age.trim()===""){
//         console.warn("No input provided.");
//     }else{
//         age=Number(age.trim());
//         if(isNaN(age)){
//             console.error("Invalid input. Please enter a numeric value.");
//         }else{
//             console.log("ye no. hai bhai");
            
//         }
//     }
// }





// ask user for a word until they type stop count how many typed yes use loop
// let count = 0;
// let word = prompt("Enter a word:");

// while (word !== "stop") {
//     count++;
//     word = prompt("Enter another word (type 'stop' to end):");
// }

// console.log(`You entered ${count} words.`);







// Print numbers divisible by 7 from 1 to 50 use % operator
// for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(i)
//     }
// }







// Print all odd numbers from 1 to 30 and their sum

// let arr = [];
// let sum = 0;

// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);      
//         arr.push(i);         
//         sum += i;            
//     }
// }

// console.log("All odd numbers:", arr);
// console.log("Sum of all odd numbers from 1 to 30:", sum);



// Odd number between 1 to 20 break when he reaches first three odd numbers 
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) continue;  

//     if (i === 7) break;         

//     console.log(i);
// }







// When we enter multiple spaces in prompt enter what will get and after that if you click OK and cancel then we can modify it using this codei
// let age = prompt("Enter your age");
// if(age===null){
//     console.error("User cancelled the prompt.")
// }else{
//      if(age.trim()===""){
//         console.warn("No input provided.")
//      }else{
//         Number(age.trim());
//         if(isNaN(age)){
//             console.error("Invalid input. Please enter a numeric value.")
//         }else{
//             console.log(`your age is ${age}`);
            
//         }
//      }
// }






// Print multiplication table of 38 with the propper desigin of actuall table ex... 38 X 1 = 38 lik this
// for (let i = 1; i < 11; i++){
//     console.log(`38 X ${i} = ${38*i}`);
    
// }







// count how many no.s are greater than 8  till 15 
// let count  = 0;
// for(let i =1; i<16;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(`Total no.s greater than 8 till 15 is ${count}`);











// ask user for password access otherwise don't exist in console 
// let password = "112211";
// let pass = prompt("Enter your password:");
// if(pass === null){
//     console.error("User cancelled the prompt.");
// }else{
//     if(pass.trim() === password){
//         console.log("Access granted.");
//     }else{
//         console.log("Access denied.");
// }}







//how for loop works
//for(start;end;chnage)









// Level 2 :-            Allow only 3 attempts to  enter correct password if users get it right early stop if not account locked

// how while loop works
// let i = 0; //start
// while(i<=11){           //basically kab takchalega "end"
//     console.log("no way");
//     i++;                   //change
// }





// let attempts = 0;
// let khulgaya = false;
// const password = "1234";

// while (attempts < 3 && !khulgaya) {
//   const pass = prompt("Enter your password:");
//   attempts++;
//   if (pass === password) {
//     khulgaya = true;
//     break;
//   }
// }

// if (khulgaya) {
//   console.log("Welcome! Account unlocked.");
// } else {
//   console.log("Account banned");
// }











// ask user for a word until they type stop count how many typed yes use loop
// let word = prompt("Enter a word:");
// let count = 0;

// while (word !== "stop") {
//   if (word === "yes") {
//     count++;
//   }
//   console.log(`You entered 'yes' ${count} times`);
//   word = prompt("Enter a word:");
// }

// console.log("Program ended");








// print number divisible by seven from one to fifty youth modulus% and loop 
// let sum = 0;
// for(let i=1;i<=50;i++){
//     if(i%7===0){
//         console.log(i)
//         sum = sum+i;
//     }
       
// }
// console.log(`here is 7th tables final sum:${sum}`);








// Some of all odds numbered from one to 30 and only odd numbers print final sums
// let sum = 0;
// for(let i =1;i<31;i++){
//     if(i % 2 !==0){
//         console.log(i);
//         sum = sum + i;
//     }
// }
// console.log(`the sum of all odds is ${sum}`);









// Ask user until they type even number and stop when he enter
// let ask = +prompt("Type any number:");

// while (true) {
//   if (ask % 2 === 0) {
//     console.log("Even number entered. Program stopped.");
//     break;
//   }
//   ask = +prompt("Type any number:");
// }
  

    //  OR
// let num = +prompt("enter a number");
// while(num %2 !== 0){
//     num = +prompt("enter a number")
// }






// in numbers between two users input input start end end using prompt prompt all number 
// let one = +prompt("soyal chat");
// let two = +prompt("daam chat");
// if(one > two) console.error("the no not should be greater than one");
// for(let i = one; i<=two;i++){
//     console.log(i);
    
// }





// print first  3 odd no. between 1 to 20
// let count = 0;
// for(let i = 1; i < 21; i++){
//     if(count === 3) break;
//     if(i%2 !==0){
//         console.log(i);
//         count++;
//     }
// }









// print any 5 no.s and check no. is + or- in log
// let count = 0 ;
// while(count < 5){
//     let no = +prompt("enter any 5 no.")
//     if(no > 0){
//         console.log("this is  +no. os go ahed");
        
//     }else if(no<0){
//         console.log("this is -  no. stop!!");
//     }else{
//         console.log("no. is 0");
//     }
//     count++;
// }
// console.log("game ended now");









// Ask user for numbers until they type “stop”.
// Count how many are +, how many are -, how many are 0.
// Then print the totals at the end.

// let count = 0;
// let ch = 'A'
// let ask = prompt("Type any number (or 'stop' to end):");

// while (ask !== "stop") {
//     // check for 'stop' BEFORE converting
//     if(ask >= 'A' && ask<='Z' ){
//         break;

//     }
//     let num = +ask;
//     if (num > 0) {
//         console.log(`The number ${num} is positive.`);
//     } else if (num < 0) {
//         console.log(`The number ${num} is negative.`);
//     } else {
//         console.log(`You entered ${num}.`);
//     }

//     count++;
//     ask = prompt("Type any number (or 'stop' to end):");
// }

// console.log("Stopped here.");





// let count = 0;
// for(let i =1;i<6;i++){
//     let ask = +prompt("tell us any no.");
//     if(ask>=0){
//         console.log(`no is ${ask} +ve`);
//         count++;
//     }
//     console.log(count);
    
// }



// let n = prompt("Ask user for a number");
// n = Number(n); 

// if (n > 0) {
//     console.log(`${n} is positive`);
// } else if (n < 0) {
//     console.log(`${n} is negative`);
// } else if (n === 0) {
//     console.log(`${n} is zero`);
// } else {
//     console.log(`${n} is an invalid number`);
// }


// let n = Number(prompt("Enter a number to print its multiplication table:"));

// console.log(`Multiplication table for ${n}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`);
// }






// asker user for any Table of multiplication 
// let n = +prompt("tell us any no.")
// console.log(`the multiplication table of ${n}`);
// for(let i = 1;i<11;i++){
//     console.log(`${n}X${i} = ${n*i}`);
// }













// Write a program using a for loop to print all numbers between 1 and 100,
// but with these special rules:
// If a number is divisible by both 3 and 5, print "FizzBuzz".
// If only divisible by 3, print "Fizz".
// If only divisible by 5, print "Buzz".
// Otherwise, print the number itself.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }









// sk the user for two numbers — one for “Fizz” and one for “Buzz” — then print the pattern up to 100.
// let fizzNum = +prompt("Enter a number for Fizz:");
// let buzzNum = +prompt("Enter a number for Buzz:");

// for (let i = 1; i <= 100; i++) {
//     if (i % fizzNum === 0 && i % buzzNum === 0) {
//         console.log("FizzBuzz");
//     } else if (i % fizzNum === 0) {
//         console.log("Fizz");
//     } else if (i % buzzNum === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }







// 👉 Find who scored the highest marks and print both the name and score.
// let names = ["Amit", "Riya", "Suhail", "Neha", "Karan"];
// let marks = [87, 92, 76, 99, 85];

// let highest = marks[0];
// let topper = names[0];

// for (let i = 1; i < marks.length; i++) {
//     if (marks[i] > highest) {
//         highest = marks[i];
//         topper = names[i];
//     }
// }

// console.log(`🎯 Topper is ${topper} with ${highest} marks!`);






// ask user for a number 5 time if the no is +ve or -ve

// for(let i =1;i<6;i++){
//     let n = +prompt("tell us any no.");
//     if(n>0){
//         console.log("positive number");
//     }else if(n<0){
//         console.log("negatve number ");
//     }
    
// }







// Atm simulator 
// let balance = 1000;
// let amt = +prompt("what is your balance..?")
// if(amt<=balance){
//     balance -= amt;
// }else{
//     console.log("Inscufficient balance");
// }






// array fliter like if we had to print same value in different arr
let arr = [1,2,3,4,5];
let arr2 = arr.filter(function (vals) {
    return vals < 3;
})
console.log(arr2);
console.log(arr);
