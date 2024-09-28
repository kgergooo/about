import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDetailsComponent } from './app-details.component';
import { AppDetailsRoutingModule } from './app-details-routing.module';

@NgModule({
  declarations: [AppDetailsComponent],
  imports: [CommonModule, AppDetailsRoutingModule],
})
export class AppDetailsModule {}
