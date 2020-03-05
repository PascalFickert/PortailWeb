import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


export interface Item { mail: string; password: string; }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projetPortailWeb';
  constructor(public auth: AngularFireAuth) {
  }
}


