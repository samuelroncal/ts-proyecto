import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'erp-caja',
  template: `
    <p>
      caja works!
    </p>
    <a routerLink="vouchers">Vouchers</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CajaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
