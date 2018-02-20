import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'erp-lista',
    templateUrl: 'lista.component.html'
})

export class ListaComponent implements OnInit {
    public title: string;
    public misApps: string[];
    constructor() {
    }

    ngOnInit() {
        this.title = 'Lista de Apps';
        this.misApps = this.apps();
    }

    // get apps(): string[] {
    //     return ['AUTH_XE', 'ADMISION', 'CONFIG', 'FINANCIERO'];
    // }

    public onAdd(): void {
        // this.misApps.push({id : 5, name : 'hola'});
    }

    public updatePapa(data) {
        console.log(data.name + ' test');
    }

    public apps(): any[] {
        return [
            {id: 1, name: 'AUTH'},
            {id: 2, name: 'ADMISION'},
            {id: 3, name: 'CONFIG'},
            {id: 4, name: 'INFRAESTRUCTURA'}
        ];
    }
}
