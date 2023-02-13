import { Component } from '@angular/core';

import { sampleItems } from "./sample-items";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sampleItems = sampleItems;
}
