import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrayComponent } from './tray/tray.component';

@NgModule({
    declarations: [
        AppComponent,
        TrayComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
