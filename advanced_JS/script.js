// let product ={
//     name:"apple",
//     price:33223,
//     discountedprice:function(){
//         return this.price - 200;
//     },
// }
// console.log(product.discountedprice());







// 2
// class car{
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         return this.brand + " - " + this.speed;
//     }
// }
// let car1 = new car("audi", 200)



// 3
// class student{
//     constructor(name,rollnumer){
//         this.name = name;
//         this.rollnumer = rollnumer;
//     }
//     introduce(){
//         console.log(this.name + "-" + this.rollnumer);
        
//     }
// }
// let st1 = new student("harsh", 21);




// 4
// let obj = {
//     sayname: function () {
//         console.log(this);
//     },
//     sayarrwoname:()=>{
//         console.log(this);
        
//     }
// }
// obj.sayarrwoname();
// obj.sayname();





// 5
// function abcd() {
//     console.log(this.name);
// }
// let obj = {
//     name:"dddd"
// }
// abcd.call(obj)





// function chalunga(fnc) {
//     setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// }
// chalunga(function() {
//     console.log("hey");
// })


function chaloge(username, cb) {
    setTimeout(() => {
        cb({ username, age: 22, email: "jsjshsshsj" });
    }, 2000);
}

chaloge("sss", function (data) {
    console.log(data);
});
