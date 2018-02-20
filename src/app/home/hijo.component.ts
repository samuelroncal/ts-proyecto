import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'erp-hijo',
    templateUrl: 'hijo.component.html'
})

export class HijoComponent implements OnInit {
    @Input() apps: any[];
    @Output() update = new EventEmitter<string>();
    constructor() { }
    ngOnInit() { }

    public onEdit(app: any) {
        this.update.emit(app);
    }
}
