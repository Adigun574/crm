import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId:number
  currentJustify = 'start'
  customers:any[]
  selectedCustomer:Customer = {
    firstName:null,
    lastName:null,
    address:null,
    phone:null,
    email:null
  }
  editCustomerDetailsForm:FormGroup
  products:any[]
  updatingCustomer:boolean = false


  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private customerService:CustomerService,
    private router:Router
  ) { 
    this.customerId = this.route.snapshot.params.id
    // this.getCustomers()
    this.getSingleCustomer()
  }

  ngOnInit() {
    this.getCustomerSalesRecord()
  }

  

  getSingleCustomer(){
    this.customerService.getSingleCustomer(this.customerId).subscribe(data=>{
      this.selectedCustomer = <Customer>data
    },
      err=>{

      })
  }

  updateCustomer(){
    this.updatingCustomer = true
    console.log(this.selectedCustomer)
    this.customerService.updateCustomer(this.selectedCustomer).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl('/main/customers')
    },
      err=>{
        console.log(err)
        this.updatingCustomer = false
      })
  }

  


  getCustomerSalesRecord(){
    this.products = [
      {
        productName:'product1',
        quantity:10,
        totalPrice:10000,
        date:'02/02/19'
      },
      {
        productName:'product2',
        quantity:15,
        totalPrice:12000,
        date:'02/02/19'
      },
      {
        productName:'product3',
        quantity:2,
        totalPrice:5000,
        date:'02/02/19'
      },
      {
        productName:'product4',
        quantity:20,
        totalPrice:13500,
        date:'02/02/19'
      },
    ]
  }


  // getCustomers(){
  //   this.customers = [
  //     {
  //       id:1,
  //       name:'Adigun Ibrahim',
  //       phoneNo:'08165230739',
  //       email:'adigun@gmail.com',
  //       address:'12 main str'
  //     },
  //     {
  //       id:2,
  //       name:'Adigun Adedotun',
  //       phoneNo:'08165230739',
  //       email:'adigun@gmail.com',
  //       address:'12 main str'
  //     },
  //     {
  //       id:3,
  //       name:'Adigun Akanni',
  //       phoneNo:'08165230739',
  //       email:'adigun@gmail.com',
  //       address:'12 main str'
  //     }
  //   ]
  // }

  // getSingleCustomer(){
  //   this.selectedCustomer = this.customers.find(x=>x.id==this.customerId)
  // }


}
