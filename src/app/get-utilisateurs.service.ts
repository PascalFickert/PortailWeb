import { User } from './user';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUtilisateursService {

  constructor() { }

  public getAllUtilisateurs(): Observable<User[]> {
    return of ([{nom: 'Fenghour', prenom: 'Billel', mail: 'billel.fenghour@tourisme.com', role: 'touriste', urlPhoto: '../assets/toki.jpg'},{nom: 'Fickert', prenom: 'Pascal', mail: 'pascal.fickert@vacances.com', role: 'touriste', urlPhoto: '../assets/ii.jpg'
    }]);
  }
}
