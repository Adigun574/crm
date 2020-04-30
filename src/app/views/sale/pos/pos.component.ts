import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  cartEmpty:boolean = false
  orders = [
    {
      name:'fanta',
      sellPrice:150
    },
    {
      name:'sprite',
      sellPrice:200
    }
  ]
  foods = [
    {
      name:'fanta',
      sellPrice:150
    },
    {
      name:'sprite',
      sellPrice:200
    }
  ]
  total = 350
  loadProducts = true

  constructor() { }

  ngOnInit(): void {
  }













}

// }
// import { Component, OnInit, Output } from '@angular/core';
// import { ProductsService } from '../products.service';
// import { UsersService } from '../users.service'
// import { Product } from '../models/products'
// import { Order } from '../models/order'
// import { SalesService } from '../sales.service'
// import { EventEmitter } from 'events';


// @Component({
//   selector: 'app-order',
//   templateUrl: './order.component.html',
//   styleUrls: ['./order.component.css']
// })
// export class OrderComponent implements OnInit {

//   message: string ="Hello"
//   @Output() MessageEvent = new EventEmitter()
//   sendMessage(){
//     this.MessageEvent.emit(this.message)
//   }
//   // products: Product[]
//   // drinks: Product[]
//   // foods: Product[]
//   // others: Product[]
//   products:any
//   drinks:any[]
//   foods:any[]
//   others:any[]
//   foodSearchTerm=''
//   drinkSearchTerm=''
//   otherSearchTerm=''
//   orders:Order[]=[]
//   total=0
//   calculatornumbers=[]
//   calculatorscreen=0
//   user
//   cashierName
//   cartEmpty = false
//   showCompleteOrder:boolean=false
//   disableCompleteOrder:boolean
//   loadProducts:boolean=true
//   foodExists:boolean=false
//   drinkExists:boolean=false
//   otherExists:boolean=false
//   constructor(
//     private productsService: ProductsService,
//     private usersService: UsersService,
//     private salesService: SalesService
//   ) { 
//     this.user=JSON.parse(localStorage.getItem("user"))
//   }

//   ngOnInit() {
//     this.getProducts()
//     this.cashierName=this.user.name
//     this.checkCartEmpty()
    
//   }

//   searchFood(value){
//     this.foodSearchTerm=value
//     this.getProducts()
//   }

//   searchDrink(value){
//     this.drinkSearchTerm=value
//     this.getProducts()
//   }

//   searchOther(value){
//     this.otherSearchTerm=value
//     this.getProducts()
//   }

  
//   getProducts(): void{
//     this.productsService.getProducts(this.user.email).subscribe(data=>{
//       this.products=data
//       this.drinks=this.products.filter(x=>x.category=='Drink' && x.name.includes(this.drinkSearchTerm))
//       if(this.drinks.length<1){
//         this.drinkExists=true
//       }
//       this.foods=this.products.filter(x=>x.category=='Food' && x.name.includes(this.foodSearchTerm))
//       if(this.foods.length<1){
//         this.foodExists=true
//       }
//       this.others=this.products.filter(x=>x.category=='Others' && x.name.includes(this.otherSearchTerm))
//       if(this.others.length<1){
//         this.otherExists=true
//       }
//       this.loadProducts=false
//     },
//     err=>{console.log(err)}) 
//   }

//   calc(i){
//     this.calculatornumbers.push(i)
//     this.calculatorscreen=+this.calculatornumbers.join("")
//   }

//   cancel(){
//     this.calculatorscreen=0
//     this.calculatornumbers=[]
//   }

//   pay(){
//     this.total=this.total-this.calculatorscreen
//     if(this.total==0 && this.orders.length!=0){
//       this.showCompleteOrder=true
//     }
//     this.disableCompleteOrder = this.calculatorscreen == 0 ? false : true
//     this.cancel()
//   }

//   printBill(){
//     let printContent = document.getElementById("bill").innerHTML
//     let win = window.open('')
//     win.document.write(printContent)
//     win.print()
//     win.focus()
//     win.close()
//   }


//   addToCart(item){
//     item.quantity=1
//     this.orders.push(item)
//     this.calculateTotal()
//     this.checkCartEmpty()
//   }

//   setQuantity(quantity,i){
//     this.orders[i].quantity=quantity
//   }

//   calculateTotal(){
//     this.total=0;
//     for(let item of this.orders){
//     this.total=this.total+item.sellPrice;    
//     }
//   }

//   removeItem(i){
//     this.orders.splice(i,1)
//     this.calculateTotal()
//     this.checkCartEmpty()
//   }

//   test(){
//     console.log(this.orders)
//   }

//   checkCartEmpty(){
//     this.cartEmpty = this.orders.length==0 ? true : false
//   }

//   resetSale(){
//     this.orders=[]
//     this.showCompleteOrder=false
//     this.total=0
//     this.calculatornumbers=[]
//     this.calculatorscreen=0
//     this.checkCartEmpty()
//   }

//   completeOrder(){
//     this.salesService.saveSales(this.orders).subscribe(data=>{
//       console.log(data)
//     },
//     err=>{
//       console.log(err)
//     })
//     console.log(this.orders)
//   }

// }