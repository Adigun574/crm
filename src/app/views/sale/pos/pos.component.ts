import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CustomerService } from '../../../services/customer.service';
import { Sale, Invoice, Cashier, Cart } from '../../../models/sales';
import { Customer } from '../../../models/customer';
import { SaleService } from '../../../services/sale.service';
import { date } from '../../../classes/date';
import { User } from '../../../models/user';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  cartEmpty:boolean = false
  orders = []
  apiorders = []
  products = []
  total = 0
  loadProducts = true
  customers=[]
  sale = new Sale()
  selectedCustomer:Customer
  guestCustomer = {
    firstName: 'Guest',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
    image: '',
    id: 1,
    userCreated: 0,
    userModified: 0,
    // dateCreated: '',
    // dateModified: '',
  }
  allProducts:any[] = []
  savingSale:boolean = false
  savingSaleCredit:boolean = false
  currentUser:User

  constructor(
    private productService:ProductService,
    private customerService:CustomerService,
    private saleService:SaleService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
   }

  ngOnInit(): void {
    this.getProducts()
    this.getCustomers()
    // this.selectedCustomer = this.guestCustomer
    console.log('WTF!!! Why are you here???')
  }

  completeSale(method){
    if(method == 'cash'){
      this.savingSale = true
    }
    else{
      this.savingSaleCredit = true
    }
    if(this.selectedCustomer){
      this.sale.customerID = this.selectedCustomer.id
    }
    else{
      this.sale.customerID = 1
      this.selectedCustomer = this.guestCustomer
    }
    this.sale.cart = null
    if(method=='cash'){
      this.sale.payment = [
        {
          id: 0,
          customerID: this.selectedCustomer.id,
          amount: this.total,
          method: 'cash',
          reference: null,
          // DatePaid: date(),
          invoiceNo: null,
          userCreated: this.currentUser.id
        }
      ]
    }
    else{
      this.sale.payment = []
    }
    this.sale.userCreated = this.currentUser.id
    this.sale.invoice = new Invoice()
    this.sale.invoice.cashier = new Cashier()
    this.sale.invoice.cashier.id = this.currentUser.id
    this.sale.invoice.customerID = this.selectedCustomer.id
    this.sale.invoice.amount = this.total
    this.sale.invoice.amountPaid = this.total
    this.sale.invoice.cashier.userCreated = this.currentUser.id
    this.sale.invoice.userCreated = this.currentUser.id
    this.sale.cart = new Cart()
    this.sale.cart.amount = this.total
    this.sale.cart.items = this.apiorders
    this.sale.cart.userCreated = this.currentUser.id
    // console.log(this.sale)
    // console.log(JSON.stringify(this.sale))
    this.saleService.saveSale(this.sale).subscribe(data=>{
      this.savingSale = false
      this.savingSaleCredit = false
      this.resetSales()
    },
      err=>{
        this.savingSale = false
        this.savingSaleCredit = false
      })
  }

  setQuantity(qnt,i){
    this.orders[i].quantity = qnt
    this.apiorders[i].quantity = qnt
    this.calculateTotal()
  }

  searchProducts(searchterm){
    if(searchterm==''){
      this.products = this.allProducts
    }
    else{
      this.products = this.allProducts.filter(x=>x.name.toLowerCase().includes(searchterm.toLowerCase()))
    }
  }

  getProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.loadProducts = false
      this.allProducts = <any[]>data
      this.products = <any[]>data
    })
  }

  addToCart(product){
    product.quantity = 1
    this.orders.push(product)
    this.apiorders.push({
      ID:0,
      cartID:0,
      Name:product.name,
      Code:product.code,
      Quantity:1,
      Amount:product.salePrice,
      ProductID:product.id
    })
    this.calculateTotal()
  }

  calculateTotal(){
    this.total = 0
    this.orders.forEach(order=>this.total += order.salePrice * order.quantity)
  }

  getCustomers(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <any[]>data
    })
  }

  removeItem(i){
    this.orders.splice(i,1)
    this.calculateTotal()
  }

  

  resetSales(){
    this.orders = []
  }

}

