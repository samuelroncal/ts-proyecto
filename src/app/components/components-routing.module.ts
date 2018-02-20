import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuardService } from '../shared/auth-guard.service';
const routes: Routes = [
   {
    path: '',
    component: MenuComponent,
    children: [{
        path: 'c1',
        component: C1Component,
        canActivate: [AuthGuardService],
        data: {
            role: 'admin'
        }
      },
      {
        path: 'c2',
        component: C2Component,
        canActivate: [AuthGuardService],
        data: {
            role: 'admin'
        }
      },
      {
        path: 'c3',
        component: C3Component,
        canActivate: [AuthGuardService]
      },
      {
        path: 'c4',
        component: C4Component,
        canActivate: [AuthGuardService]
      }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
