import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-training-programs',
  templateUrl: './training-programs.component.html',
  styleUrls: ['./training-programs.component.css']
})
export class TrainingProgramsComponent implements OnInit {

  addProgramForm:FormGroup
  programs:any[]
  employees:any[]

  constructor(
    private fb:FormBuilder,
    private modalService:NgbModal
  ) {
    this.addProgramForm = this.fb.group({
      name:['',Validators.required],
      duration:[],
      description:['']
    })
   }

  ngOnInit(): void {
    this.getPrograms()
    this.getEmployees()
  }

  open(content, options = {}) {
    this.modalService.open(content, options).result.then((result) => {
    },
    err=>{})
  }

  getPrograms(){
    this.programs = [
      {
        name:'Customer Relationship',
        duration:'3 weeks',
        description:'To teach employees how to relate with customers'
      },
      {
        name:'Aggressive Thinking',
        duration:'1 week',
        description:'To teach employees how to aspire to perspire'
      },
      {
        name:'Catapulting Success',
        duration:'1 week',
        description:'Still all about aspire to perspire bullshit'
      }
    ]
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

}
