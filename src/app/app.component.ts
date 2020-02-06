import { Component } from '@angular/core';


export interface Item { mail: string; password: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetPortailWeb';
}
