let product ={
    name:"apple",
    price:33223,
    discountedprice:function(){
        return this.price - 200;
    },
}
console.log(product.discountedprice());
