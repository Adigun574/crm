import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../../services/lead.service';
import { Lead } from '../../../models/lead';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads:Lead[]
  isRTL=null
  loading:boolean = false
  addLeadForm:FormGroup
  genders=[
    {name:'male'},
    {name:'female'},
    {name:'not specified'}
  ]
  savingLead:boolean = false
  submitted:boolean = false
  searchKey:string = ''
  filteredLeads:Lead[] = []

  constructor(
    private leadService:LeadService,
    private modalService:NgbModal,
    private fb:FormBuilder
  ) { 
    this.addLeadForm = this.fb.group({
      firstName:[,Validators.required],
      lastName:[,Validators.required],
      email:[],
      phone:[],
      address:[],
      gender:[],
      image:[],
      company:[],
      userCreated:[0],
      userModified:[0],
      dateCreated:["2020-04-30T04:18:48.379Z"],
      dateModified:["2020-04-30T04:18:48.379Z"]
    })
  }

  ngOnInit(): void {
    this.getLeads()
  }

  saveLead(){
    this.submitted = true
    if(this.addLeadForm.invalid){
      return
    }
    else{
      this.savingLead = true
      this.leadService.saveLead(this.addLeadForm.value).subscribe(data=>{
        this.getLeads()
        this.savingLead = false
        this.submitted = false
        this.modalService.dismissAll()
        console.log(data)
      },
        err=>{
          this.submitted = false
          this.savingLead = false
          this.modalService.dismissAll()
          console.log(err)
        })
      console.log(this.addLeadForm.value)
    }
  }

  getLeads(){
    this.loading = true
    this.leadService.getAllLeads().subscribe(data=>{
      this.leads = <Lead[]>data
      this.filteredLeads = this.leads
      this.loading = false
      this.filteredLeads.forEach(lead=>{
        if(!lead.FirstName){
          lead.FirstName = ''
        }
        if(!lead.LastName){
          lead.LastName = ''
        }
      })
    },
      err=>{
      })
  }

  open(content){
    this.modalService.open(content)
  }

  convertToCustomer(id){
    this.leadService.convertLeadToCustomer(id).subscribe(data=>{
      this.getLeads()
    })
  }

  filterLeads(){
    this.filteredLeads = this.leads.filter(x=>x.FirstName.includes(this.searchKey) || x.LastName.includes(this.searchKey))
  }

}
