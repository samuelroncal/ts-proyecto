import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CajaComponent } from './caja.component';

const routes: Routes = [
  {
   path: '',
   component: CajaComponent,
   children: [{
       path: 'vouchers',
       loadChildren: 'app/caja/vouchers/vouchers.module#VouchersModule'
       // component: C1Component
     }
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaRoutingModule { }
