import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../../services/lead.service';
import { Lead } from '../../../models/lead';


@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {

  leads:Lead[]
  isRTL=null

  constructor(
    private leadService:LeadService
  ) { }

  ngOnInit(): void {
    this.getLeads()
  }

  getLeads(){
    this.leadService.getAllLeads().subscribe(data=>{
      this.leads = <Lead[]>data
      console.log(this.leads)
    },
      err=>{

      })
  }

}
