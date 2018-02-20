import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'about',
    loadChildren: 'app/about'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutComponent],
  exports : [
    AboutComponent,
  ]
})
export class AboutModule { }
