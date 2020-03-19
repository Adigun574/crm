import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { ErrorMsgComponent } from '../views/components/error-msg/error-msg.component';
import { TextLoaderComponent } from '../views/components/text-loader/text-loader.component';

@NgModule({
  declarations: [FilterPipe, LoaderComponent, ErrorMsgComponent, TextLoaderComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, ErrorMsgComponent, FilterPipe, TextLoaderComponent]
})
export class SharedModule {}
