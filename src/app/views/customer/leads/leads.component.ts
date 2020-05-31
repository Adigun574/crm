import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../../services/lead.service';
import { Lead } from '../../../models/lead';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads:Lead[]
  isRTL=null
  loading:boolean = false

  constructor(
    private leadService:LeadService,
    private modalService:NgbModal
  ) { }

  ngOnInit(): void {
    this.getLeads()
  }

  getLeads(){
    this.loading = true
    this.leadService.getAllLeads().subscribe(data=>{
      this.leads = <Lead[]>data
      this.loading = false
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

}
