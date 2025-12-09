// let product ={
//     name:"apple",
//     price:33223,
//     discountedprice:function(){
//         return this.price - 200;
//     },
// }
// console.log(product.discountedprice());







// 2
class car{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    }
    drive(){
        return this.brand + " - " + this.speed;
    }
}
let car1 = new car("audi", 200)