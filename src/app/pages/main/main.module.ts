import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, QRCodeModule],
})
export class MainModule {}
