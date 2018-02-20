import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';

@Component({
  selector: 'erp-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  public persona1: Persona;
  constructor() { }

  ngOnInit() {
    this.persona1 = new Persona('David', '203033035', '3');
  }

}
