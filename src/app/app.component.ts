import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    edge = {
        top: true,
        bottom: true,
        left: true,
        right: true
    };

    constructor() { }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        console.log('Drag n Drop');
    }

    checkEdge(event) {
        this.edge = event;
        console.log('edge:', event);
    }

}
