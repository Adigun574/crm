import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SkillService } from '../../../services/skill.service';
import { date } from '../../../classes/date';
import { Router } from '@angular/router'

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
  currentJustify:any
  qualificationForm:FormGroup
  loadingDetails:boolean = true
  savingQualification:boolean = false
  updatingEmployee:boolean = false
  deletingEmployee:boolean = false


  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private skillService:SkillService,
    private router:Router
  ) { 
    this.employeeId = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.getSingleEmployee()
  }

  setForms(){
    this.editEmployeeDetailsForm = this.fb.group({
      firstName:[this.selectedEmployee.firstName],
      lastName:[this.selectedEmployee.lastName],
      phone:[this.selectedEmployee.phone],
      email:[this.selectedEmployee.email],
      address:[this.selectedEmployee.address],
      // position:[this.selectedEmployee.position],
      hel:[this.selectedEmployee.hel],
      qualifications:[this.selectedEmployee.qualifications],
      id:[this.selectedEmployee.id]
    })
    this.qualificationForm = this.fb.group({
      id: 0,
      name: [],
      status: [true],
      startDate: [],
      endDate: [],
      staffID: [+this.employeeId]
    })
  }

  getSingleEmployee(){
    this.loadingDetails = true
    this.skillService.getSingleStaff(this.employeeId).subscribe(data=>{
      this.selectedEmployee = <any>data
      this.setForms()
      this.loadingDetails = false
    },
      err=>{})
  }

  updateStaff(){
    this.updatingEmployee = true
    // console.log(this.editEmployeeDetailsForm.value)
    // this.skillService.updateStaff(this.editEmployeeDetailsForm.value).subscribe(data=>{
    //   this.updatingEmployee = false
    // },
    //   err=>{
    //     this.updatingEmployee = false
    //   })
    delete this.selectedEmployee.userCreated
    delete this.selectedEmployee.userModified
    this.selectedEmployee.image = ''
    console.log(JSON.stringify(this.selectedEmployee))
    this.skillService.updateStaff(this.selectedEmployee).subscribe(data=>{
      this.updatingEmployee = false
    },
      err=>{
        this.updatingEmployee = false
      })
  }

  saveQualification(){
    this.savingQualification = true
    this.qualificationForm.value.startDate = `${this.qualificationForm.value.startDate}T11:53:50.102Z`
    this.qualificationForm.value.endDate = `${this.qualificationForm.value.endDate}T11:53:50.102Z`
    // console.log(this.qualificationForm.value)
    this.skillService.saveQualification(this.qualificationForm.value).subscribe(data=>{
      this.savingQualification = false
      this.getSingleEmployee()
    },
      err=>{
        this.savingQualification = false
      })
  }   

  deleteStaff(){
    this.deletingEmployee = true
    this.skillService.deleteEmployee(this.employeeId).subscribe(data=>{
      console.log(data)
      this.deletingEmployee = false
      this.router.navigateByUrl('main/employees')
    },
      err=>{
        console.log(err)
        this.deletingEmployee = false
      })
  }

}
