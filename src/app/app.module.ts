import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AngularDraggableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
