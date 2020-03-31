import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InventoryComponent } from './inventory/inventory.component';
import { RouterModule } from '@angular/router';
import { RequestedItemsComponent } from './requested-items/requested-items.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [SalesReportComponent, InventoryComponent, RequestedItemsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    RouterModule,
    NgSelectModule
  ]
})
export class SaleModule { }
