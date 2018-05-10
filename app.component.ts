import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
        <h1>This is first component in angular application with web pack</h1>
        <h2>{{name}}</h2>
    `
})
export class AppComponent {
    public name: string = 'Surender'
}