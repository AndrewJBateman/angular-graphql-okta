import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataComponent } from './data.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    MaterialModule
  ],
  exports: [DataComponent]
})
export class DataModule { }
