import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CajaRoutingModule } from './caja-routing.module';
import { CajaComponent } from './caja.component';

@NgModule({
  imports: [
    CommonModule,
    CajaRoutingModule
  ],
  declarations: [CajaComponent]
})
export class CajaModule { }



