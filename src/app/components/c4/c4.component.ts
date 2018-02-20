import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/persona';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'erp-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {
  name = new FormControl();
  personaForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.name.setValue('David');
    this.personaForm = this.formBuilder.group({
      nombre: ['test', Validators.required],
      codigo : [],
      tipo : [],
      email : ['', Validators.email]
    });
  }

}
