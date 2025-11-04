
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

