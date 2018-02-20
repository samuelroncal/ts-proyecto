import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VouchersComponent } from './vouchers.component';

const routes: Routes = [
  {
   path: '',
   component: VouchersComponent
  },
  // {
  //   path: 'new',
  //   component: NewComponent
  // },
  // {
  //   path: ':id',
  //   component: EditComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VouchersRoutingModule { }
