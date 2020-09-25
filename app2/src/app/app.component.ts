import { Component } from '@angular/core';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


import { getName } from '../../../app1/src/entry';

getName();

export class AppComponent {
  title = 'app2';
}
