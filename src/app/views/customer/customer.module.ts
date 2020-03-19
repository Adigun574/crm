import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { MatButtonModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';


@NgModule({
  declarations: [CustomersComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CustomerModule { }
