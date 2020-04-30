import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[] = []
  addCustomerForm:FormGroup
  genders=[
    {name:'male'},
    {name:'female'},
    {name:'not specified'}
  ]
  savingCustomer:boolean = false
  submitted:boolean = false

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private router: Router,
    private customerService:CustomerService
  ) { 
    this.addCustomerForm = this.fb.group({
      FirstName:[,Validators.required],
      LastName:[,Validators.required],
      Email:[],
      Phone:[],
      Address:[],
      Gender:[],
      Image:[],
      UserCreated:[0],
      UserModified:[0],
      DateCreated:["2020-04-30T04:18:48.379Z"],
      DateModified:["2020-04-30T04:18:48.379Z"]
    })
  }

  ngOnInit(): void {
    this.getAllCustomers()
  }

  saveCustomer(){
    this.submitted = true
    if(this.addCustomerForm.invalid){
      return
    }
    else{
      this.savingCustomer = true
      this.customerService.saveCustomer(this.addCustomerForm.value).subscribe(data=>{
        this.getAllCustomers()
        this.savingCustomer = false
        this.submitted = false
        this.modalService.dismissAll()
      },
        err=>{
          this.submitted = false
          this.savingCustomer = false
          this.modalService.dismissAll()
        })
    }
  }

  getAllCustomers(){
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <Customer[]>data
    },
      err=>{

      })
  }


  open(content, options = {}) {
    this.modalService.open(content, options).result.then((result) => {
    },
    err=>{})
  }


  showCustomer(id){
    this.router.navigateByUrl(`main/customer/${id}`)
  }

}
