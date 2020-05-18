import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeadService } from '../../../services/lead.service';
import { Lead } from '../../../models/lead';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent implements OnInit {

  leadId:number
  lead:Lead
  loading:boolean = false

  constructor(
    private route:ActivatedRoute,
    private leadService:LeadService
  ) { 
    this.leadId = +this.route.snapshot.paramMap.get('id')
    console.log(this.leadId)
  }

  ngOnInit(): void {
    this.getLeadById()
  }

  getLeadById(){
    this.loading = true
    this.leadService.getLeadByID(this.leadId).subscribe(data=>{
      this.lead = <Lead>data
      this.loading = false
    },
      err=>{
        this.loading = false
      })
  }

}
