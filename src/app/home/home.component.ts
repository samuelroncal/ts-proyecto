import { Component } from '@angular/core';

@Component({
    selector: 'erp-home',
    templateUrl: './home.component.html'

})

export class HomeComponent {
    public saludo: string;
    public count: number;
    public Touch() {
        this.saludo = 'Hi ERP - test';
        alert('You have touched the button');
    }
}
