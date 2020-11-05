function Cart() {
  let cost = 0;
  let items = [];
  
  this.add = function(id , name , price){
    try{
      if(items.length===10){
       throw new Error("Cart is full");
      }
    } catch(err){
      console.log("cart is full . you cannot add more items");
      return;
    }
    let obj ={};
    obj.id= id;
    obj.name= name ;
    obj.price = price;
    items.push(obj);
  };

  this.remove = function (id) {
    try {
      if(items.length===0){
        throw new Error(" cart is empty");
      }
    } catch(err){
      console.log("cart is empty");
      return;
    }
    let remainingItems =  items.filter((items) => items.id !== id);
    items= remainingItems;
  };

  this.empty = function(){
   items = [];
   cost = 0;
   return;
  };

  this.checkOut = function() {
    for(let i=0;i<items.length;i++){
      cost += items[i].price;
    }
    console.log(`Total price : ${cost}`);
    console.log("Checking out.....");
    this.empty();
  };

  Object.defineProperties(this,{
    items: {
      configurable: false,
      get: function(){
        return items;
      }
    },
    cost : {
      configurable : false,
      get: function(){
        return items;
      }
    }
  });
  

}