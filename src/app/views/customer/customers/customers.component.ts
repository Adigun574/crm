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
      UserCreated:[],
      UserModified:[],
      DateCreated:[],
      DateModified:[]
    })
  }

  ngOnInit(): void {
    this.getCustomers()
    // this.getAllCustomers()
  }

  saveCustomer(){
    if(this.addCustomerForm.invalid){
      return
    }
    else{
      console.log(this.addCustomerForm.value)
      this.savingCustomer = true
      this.customerService.saveCustomer(this.addCustomerForm.value).subscribe(data=>{
        console.log(data)
        this.savingCustomer = false
      },
        err=>{
          this.savingCustomer = false
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

  getCustomers(){
    this.customers = [
      // {
      //   id:1,
      //   name:'Adigun Ibrahim',
      //   phoneNo:'08165230739',
      //   email:'adigun@gmail.com',
      //   address:'12 main str'
      // },
      // {
      //   id:2,
      //   name:'Adigun Adedotun',
      //   phoneNo:'08165230739',
      //   email:'adigun@gmail.com',
      //   address:'12 main str'
      // },
      // {
      //   id:3,
      //   name:'Adigun Akanni',
      //   phoneNo:'08165230739',
      //   email:'adigun@gmail.com',
      //   address:'12 main str'
      // }
      {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "address": "string",
        "phone": "string",
        "gender": "string",
        "image": "string",
        "id": 1,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-04-18T08:16:03.9941987",
        "dateModified": "2020-04-18T07:15:27.178"
      },
      {
        "firstName": "stfddsdhjdfring",
        "lastName": "string",
        "email": "string",
        "address": "string",
        "phone": "string",
        "gender": "string",
        "image": "string",
        "id": 2,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-04-18T08:20:19.7624202",
        "dateModified": "2020-04-18T07:15:27.178"
      },
      {
        "firstName": "string",
        "lastName": "string",
        "email": "string",
        "address": "string",
        "phone": "string",
        "gender": "string",
        "image": "string",
        "id": 3,
        "userCreated": 0,
        "userModified": 0,
        "dateCreated": "2020-04-26T23:49:26.2460429",
        "dateModified": "0001-01-01T00:00:00"
      }
    ]
  }

  showCustomer(id){
    this.router.navigateByUrl(`main/customer/${id}`)
  }

}
