import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import { TrainingProgramsComponent } from './training-programs/training-programs.component';
import { SkillMonitoringComponent } from './skill-monitoring/skill-monitoring.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDetailComponent,
    TrainingProgramsComponent,
    SkillMonitoringComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatButtonModule,
    NgSelectModule,
    NgxChartsModule
  ]
})
export class EmployeeModule { }
