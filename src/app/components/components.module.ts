import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { Route, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, ComponentsRoutingModule, FormsModule, ReactiveFormsModule

  ],
  declarations: [C1Component, C2Component, C3Component, C4Component, MenuComponent]
})
export class ComponentsModule { }
