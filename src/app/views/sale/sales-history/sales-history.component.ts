import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../../services/sale.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css']
})
export class SalesHistoryComponent implements OnInit {

  sales:any[] = []

  constructor(
    private saleService:SaleService
  ) { }

  ngOnInit(): void {
    this.getSales()
  }

  getSales(){
    this.saleService.getAllSales().subscribe(data=>{
      this.sales = <any[]>data
    })
  }

}
