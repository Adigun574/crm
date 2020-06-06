import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer';
import { User } from '../../../models/user';
import { date } from '../../../classes/date';


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
  loading:boolean = false
  searchKey:string = ''
  filteredCustomers:Customer[] = []
  currentUser:User

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private router: Router,
    private customerService:CustomerService
  ) { 
    this.currentUser = JSON.parse(localStorage.getItem("tunnexcrmuser"))
    this.addCustomerForm = this.fb.group({
      FirstName:[,Validators.required],
      LastName:[,Validators.required],
      Email:[],
      Phone:[],
      Address:[],
      Gender:['male'],
      Image:[],
      UserCreated:[this.currentUser.id],
      UserModified:[0],
      DateCreated:[date()],
      DateModified:[date()]
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
    this.loading = true
    this.customerService.getAllCustomers().subscribe(data=>{
      this.customers = <Customer[]>data
      this.filteredCustomers = this.customers
      this.loading = false
      this.filteredCustomers.forEach(cust=>{
        if(!cust.firstName){
          cust.firstName = ''
        }
        if(!cust.lastName){
          cust.lastName = ''
        }
      })
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

  filterCustomer(){
    this.filteredCustomers = this.customers.filter(x=>x.firstName.toLowerCase().includes(this.searchKey.toLowerCase()) || x.lastName.includes(this.searchKey))
  }

}
