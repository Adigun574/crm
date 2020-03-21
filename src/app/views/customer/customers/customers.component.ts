import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:any[]
  addCustomerForm:FormGroup

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private router: Router
  ) { 
    this.addCustomerForm = this.fb.group({
      name:['',Validators.required],
      phoneNo:[],
      email:[''],
      address:['']
    })
  }

  ngOnInit(): void {
    this.getCustomers()
  }

  open(content, options = {}) {
    this.modalService.open(content, options).result.then((result) => {
    },
    err=>{})
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

  saveCustomer(){
    if(this.addCustomerForm.invalid){
      return
    }
    else{
      console.log(this.addCustomerForm.value)
    }
  }

  showCustomer(id){
    this.router.navigateByUrl(`customer/${id}`)
  }

}
