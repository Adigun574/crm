import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:any[]
  addEmployeeForm:FormGroup
  qualifications=[
    {name:"SSCE"},
    {name:"OND"},
    {name:"NCE"},
    {name:"HND"},
    {name:"B.Sc"},
    {name:"M.Sc"},
    {name:"PhD"},
    {name:"Others"}
  ]

  constructor(
    private modalService: NgbModal,
    private fb:FormBuilder,
    private router: Router
  ) { 
    this.addEmployeeForm = this.fb.group({
      name:['',Validators.required],
      phoneNo:[],
      email:[''],
      address:[''],
      position:[''],
      qualification:['']
    })
  }

  ngOnInit(): void {
    this.getEmployees()
  }

  open(content, options = {}) {
    this.modalService.open(content, options).result.then((result) => {
    },
    err=>{})
  }

  getEmployees(){
    this.employees = [
      {
        id:1,
        name:'Adigun Ibrahim',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        position:'Frontend Dev',
        Qualification:'B.Sc',
      },
      {
        id:2,
        name:'Adigun Adedotun',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        position:'Backend Dev',
        Qualification:'M.Sc',
      },
      {
        id:3,
        name:'Adigun Akanni',
        phoneNo:'08165230739',
        email:'adigun@gmail.com',
        address:'12 main str',
        position:'Devops',
        Qualification:'HND',
      }
    ]
  }

  saveEmployee(){
    if(this.addEmployeeForm.invalid){
      return
    }
    else{
      console.log(this.addEmployeeForm.value)
    }
  }

  showEmployee(id){
    this.router.navigateByUrl(`main/employee/${id}`)
  }

}
