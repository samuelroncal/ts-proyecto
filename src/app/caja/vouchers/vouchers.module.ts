import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VouchersRoutingModule } from './vouchers-routing.module';
import { VouchersComponent } from './vouchers.component';

@NgModule({
  imports: [
    CommonModule,
    VouchersRoutingModule
  ],
  declarations: [VouchersComponent]
})
export class VouchersModule { }
