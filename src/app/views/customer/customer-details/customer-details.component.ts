import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customerId:number
  currentJustify = 'start'
  customers:any[]
  selectedCustomer:any
  editCustomerDetailsForm:FormGroup


  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    this.customerId = this.route.snapshot.params.id
    this.getCustomers()
    this.getSingleCustomer()
    this.editCustomerDetailsForm = this.fb.group({
      name:[this.selectedCustomer.name],
      phoneNo:[this.selectedCustomer.phoneNo],
      email:[this.selectedCustomer.phoneNo],
      address:[this.selectedCustomer.address]
    })
  }

  ngOnInit() {
  }

  getCustomers(){
    this.customers = [
      {
        id:1,
        name:'Adigun Ibrahim',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str'
      },
      {
        id:2,
        name:'Adigun Adedotun',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str'
      },
      {
        id:3,
        name:'Adigun Akanni',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str'
      }
    ]
  }

  getSingleCustomer(){
    this.selectedCustomer = this.customers.find(x=>x.id==this.customerId)
  }

}
