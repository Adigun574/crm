import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CustomerService } from '../../../services/customer.service';
import { Sale, Invoice, Cashier, Cart } from '../../../models/sales';
import { Customer } from '../../../models/customer';
import { SaleService } from '../../../services/sale.service';
import { date } from '../../../classes/date';
import { User } from '../../../models/user';
import { Formats } from '../../../classes/print';
import Swal from 'sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  savingSaleCheque:boolean = false
  currentUser:User
  format  = new Formats()
  currentAmount
  currentPaymentMode = 'cash'
  paymentArray = []
  disableCompleteSale:boolean = true
  totalAmountPaid
  amountDue = 0
  savingSaleInvoice:boolean = false
  totalCashAmount = 0
  totalCreditAmount = 0
  totalChequeAmount = 0
  freeSaleActivated:boolean = false
  

  constructor(
    private productService:ProductService,
    private customerService:CustomerService,
    private saleService:SaleService,
    private modalService:NgbModal
  ) {
    this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
   }

  ngOnInit(): void {
    this.getProducts()
    this.getCustomers()
    // this.selectedCustomer = this.guestCustomer
    console.log('WTF!!! Why are you here???')
  }

  open(content){
    this.modalService.open(content,{centered:true})
  }

  resetSales(){
    this.orders = []
    this.selectedCustomer = null
    this.currentAmount = null
    this.amountDue = 0
    this.totalChequeAmount = 0
    this.totalCashAmount = 0
    this.totalCreditAmount = 0
    this.disableCompleteSale = false
    this.currentPaymentMode = 'cash'
    this.paymentArray = []
    this.total = 0
    this.selectedCustomer = null
    this.savingSaleInvoice = false
    this.sale = new Sale()
    this.freeSaleActivated = false
  }


  

  // completeSale(method){
  //   if(method == 'cash'){
  //     this.savingSale = true
  //   }
  //   else{
  //     this.savingSaleCredit = true
  //   }
  //   if(this.selectedCustomer){
  //     this.sale.customerID = this.selectedCustomer.id
  //   }
  //   else{
  //     this.sale.customerID = 1
  //     this.selectedCustomer = this.guestCustomer
  //   }
  //   this.sale.cart = null
  //   if(method=='cash'){
  //     this.sale.payment = [
  //       {
  //         id: 0,
  //         customerID: this.selectedCustomer.id,
  //         amount: this.total,
  //         method: 'cash',
  //         reference: null,
  //         // DatePaid: date(),
  //         invoiceNo: null,
  //         userCreated: this.currentUser.id
  //       }
  //     ]
  //   }
  //   else{
  //     this.sale.payment = []
  //   }
  //   this.sale.userCreated = this.currentUser.id
  //   this.sale.invoice = new Invoice()
  //   this.sale.invoice.cashier = new Cashier()
  //   this.sale.invoice.cashier.id = this.currentUser.id
  //   this.sale.invoice.customerID = this.selectedCustomer.id
  //   this.sale.invoice.amount = this.total
  //   this.sale.invoice.amountPaid = this.total
  //   this.sale.invoice.cashier.userCreated = this.currentUser.id
  //   this.sale.invoice.userCreated = this.currentUser.id
  //   this.sale.cart = new Cart()
  //   this.sale.cart.amount = this.total
  //   this.sale.cart.items = this.apiorders
  //   this.sale.cart.userCreated = this.currentUser.id
  //   // console.log(this.sale)
  //   // console.log(JSON.stringify(this.sale))
  //   this.saleService.saveSale(this.sale).subscribe(data=>{
  //     this.savingSale = false
  //     this.savingSaleCredit = false
  //     this.resetSales()
  //   },
  //     err=>{
  //       this.savingSale = false
  //       this.savingSaleCredit = false
  //     })
  // }

  paymentMethod(method){
    this.currentPaymentMode = method
    this.currentAmount = 0
  }

  addPayment(){
    this.paymentArray.push({
      id: 0,
      customerID: this.selectedCustomer.id,
      amount: +this.currentAmount,
      method: this.currentPaymentMode,
      reference: null,
      invoiceNo: null,
      userCreated: this.currentUser.id
    })
    this.amountDue = this.total - this.amountDue
    let cashArray = this.paymentArray.filter(x=>x.method == 'cash')
    let creditArray = this.paymentArray.filter(x=>x.method == 'credit')
    let chequeArray = this.paymentArray.filter(x=>x.method == 'cheque')
    this.totalCashAmount = 0
    this.totalCreditAmount = 0
    this.totalChequeAmount = 0
    cashArray.forEach(cash=>{
      this.totalCashAmount += cash.amount
    })
    creditArray.forEach(credit=>{
      this.totalCreditAmount += credit.amount
    })
    chequeArray.forEach(cheque=>{
      this.totalChequeAmount += cheque.amount
    })
  }

  // completeSale(){
  //   let tempTotal = 0
  //   this.paymentArray.forEach((pay)=>{
  //     tempTotal += pay.amount
  //   })
  //   if(tempTotal < this.total){
  //     this.paymentArray.push({
  //       id: 0,
  //       customerID: this.selectedCustomer.id,
  //       amount: this.total - tempTotal,
  //       method: 'credit',
  //       reference: null,
  //       invoiceNo: null,
  //       userCreated: this.currentUser.id
  //     })
  //   }
  //   console.log(this.paymentArray)
  // }

  completeSale(){
    this.savingSaleInvoice = true
      // if(method == 'cash'){
      //   this.savingSale = true
      // }
      // else{
      //   this.savingSaleCredit = true
      // }
      let tempTotal = 0
      this.paymentArray.forEach((pay)=>{
        tempTotal += pay.amount
      })
      if(tempTotal < this.total){
        this.paymentArray.push({
          id: 0,
          customerID: this.selectedCustomer.id,
          amount: this.total - tempTotal,
          method: 'credit',
          reference: null,
          invoiceNo: null,
          userCreated: this.currentUser.id
        })
      }
    // console.log(this.paymentArray)
      if(this.selectedCustomer){
        this.sale.customerID = this.selectedCustomer.id
      }
      else{
        this.sale.customerID = 1
        this.selectedCustomer = this.guestCustomer
      }
      this.sale.cart = null
      // if(method=='cash'){
      //   this.sale.payment = [
      //     {
      //       id: 0,
      //       customerID: this.selectedCustomer.id,
      //       amount: this.total,
      //       method: 'cash',
      //       reference: null,
      //       // DatePaid: date(),
      //       invoiceNo: null,
      //       userCreated: this.currentUser.id
      //     }
      //   ]
      // }
      // else{
      //   this.sale.payment = []
      // }
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
      let newPaymentArray = []
      this.paymentArray.forEach(pay=>{
        if(pay.method == 'credit'){
          pay = {}
          newPaymentArray.push(pay)
        }
        else{
          newPaymentArray.push(pay)
        }
      })
      this.sale.payment = newPaymentArray
      if(this.freeSaleActivated){
        this.sale.payment = []
      }
      // this.sale.payment = this.paymentArray
      // console.log(this.sale)
      // console.log(JSON.stringify(this.sale))
      this.saleService.saveSale(this.sale).subscribe(data=>{
        this.savingSaleInvoice = false
        this.savingSale = false
        this.savingSaleCredit = false
        this.freeSaleActivated = false
        // this.resetSales()
        Swal.fire(
          'Success',
          'Sale completed',
          'success'
        )
      },
        err=>{
          this.savingSaleInvoice = false
          this.savingSale = false
          this.savingSaleCredit = false
          this.freeSaleActivated = false
          Swal.fire(
            'Oops',
            'Something went wrong',
            'error'
          )
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
    this.amountDue = this.total
  }

  getCustomers(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <any[]>data
      this.customers.forEach(cust=>cust.fullName = `${cust.firstName} ${cust.lastName}`)
    })
  }

  removeItem(i){
    this.orders.splice(i,1)
    this.calculateTotal()
  }


  print(){
    this.format.printDiv('toPrint')
  }

  yesToFreeSale(){
    this.freeSaleActivated = true
    this.completeSale()
    this.modalService.dismissAll()
  }

  noToFreeSale(){
    this.modalService.dismissAll()
  }

}

