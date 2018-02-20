import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'erp-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  public persona1: Persona;
  constructor() { }

  ngOnInit() {
    this.persona1 = new Persona('David', '201011015', '1');
    console.log('test');
  }

}
