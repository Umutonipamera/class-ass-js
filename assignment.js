
class Mkulima {
    constructor(farms,products,orders,vendors) {
      this.farms = [];
      this.products =[];
      this.orders =[];
      this.vendors=[];
     
      
    }
    addFarm(farmId,farmName,farmerName,phoneNumber,address){
      var farm={
          farmId:farmId,
          farmName:farmName,
          farmerName:farmerName,
          phoneNumber:phoneNumber,
          address:address,
      }
      return farm
    }
    
    removeFarm(farmId){
      this.farms.shift(farmId)
      return this.farms
    }
     
    updateFarm(farmId,farmName,farmerName,phoneNumber,address){
      let newFarm=this.farms.find(newFarm=>newFarm.farmerName=="Umutoni")
      newFarm={
         farmId:farmId,
          farmName:farmName,
          farmerName:farmerName,
          phoneNumber:phoneNumber,
          address:address,
      }
      return newFarm
    }
    getFarm(farmId){
      let getFarm1=this.farms.find(getFarm1=>getFarm1.farmId==farmId)
      return getFarm1
    }
    addProduct(productId,name,price){
       var product={
          productId:productId, 
          name:name,
          price:price,
       } 
       return product
    }
    removeProduct(productId){
        this.products.shift(productId)
        return this.products
    }
    updateProduct(productId,name,price){
        let newProduct=this.farms.find(newProduct=>newProduct.name=="mango")
        newProduct={
            productId:productId,
            name:name,
            price:price,
        }
        return newProduct
    }
    getProduct(productId){
        let getProduct1=this.farms.find(getProduct1=>getProduct1.product==this.product)
        return getProduct1


    }
     printProduct(products,prices){
         var product2={
             products:products,
             prices:prices,
         }
         return product2
     }
     calculateOrderCost(price,quantity){
         let orderCost=this.farms.find(orderCost=>orderCost.productId==productId)
         console.log(`${price*quantity}`);
         return orderCost
     }
}
  
    let  farm=new Mkulima(11897,"Kirima","Umutoni",+250788520904,"Masaka")
     console.log ( farm.addFarm(11999,"Gatsata","Pamela",+250786397732,"Kigali"));
     console.log(farm.removeFarm(11999));
     console.log(farm.updateFarm(11000,"Rulindo","Juliet",7234558812,"Nairobi"));
    console.log(farm.getFarm(11897)) ;
     console.log(farm.addProduct(23456,"Mango","KES 50"));
     console.log(farm.removeProduct(23456));
     console.log(farm.updateProduct(30250,"orange","KES 30"));
     console.log(farm.getProduct("orange"));
     console.log(farm.printProduct("apple","KES 50","pineapple","KES 100"));
     console.log(farm.calculateOrderCost(20,40));