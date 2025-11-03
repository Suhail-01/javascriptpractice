
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


let age = prompt("Enter your age");
if(age === null){
    console.error("User cancelled the prompt.");
}else{
    if(age.trim()===""){
        console.warn("No input provided.");
    }else{
        age=Number(age.trim());
        if(isNaN(age)){
            console.error("Invalid input. Please enter a numeric value.");
        }else{
            console.log("ye no. hai bhai");
            
        }
    }
}


