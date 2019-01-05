import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tray',
    templateUrl: './tray.component.html',
    styleUrls: ['./tray.component.scss']
})
export class TrayComponent implements OnInit {
    trigger: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    clickTrayBtn(): void {
        this.trigger = !this.trigger;
    }
}
