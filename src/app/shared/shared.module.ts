import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FilterPipe } from '../pipes/filter.pipe';
// import { LoaderComponent } from '../loader/loader.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ErrorMsgComponent } from '../views/components/error-msg/error-msg.component';
// import { TextLoaderComponent } from '../views/components/text-loader/text-loader.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [
    // FilterPipe, 
    // LoaderComponent, 
    // ErrorMsgComponent, TextLoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule    
  ],
  exports: [
    // LoaderComponent, 
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
    // ErrorMsgComponent, FilterPipe, TextLoaderComponent
  ]
})
export class SharedModule {}
