import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeId:number
  employees:any[]
  selectedEmployee:any
  editEmployeeDetailsForm:FormGroup


  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder
  ) { 
    this.employeeId = this.route.snapshot.params.id
    this.getEmployees()
    this.getSingleEmployee()
    this.editEmployeeDetailsForm = this.fb.group({
      name:[this.selectedEmployee.name],
      phoneNo:[this.selectedEmployee.phoneNo],
      email:[this.selectedEmployee.phoneNo],
      address:[this.selectedEmployee.address],
      position:[this.selectedEmployee.position],
      qualification:[this.selectedEmployee.qualification]
    })
  }

  ngOnInit(): void {
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

  getSingleEmployee(){
    this.selectedEmployee = this.employees.find(x=>x.id==this.employeeId)
  }

}
