import { News } from './news';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetActualiteService {

  constructor() { }

  public getAllActualite(): Observable<News[]> {
    return of ([{
      titre: 'Coronavirus a encore attaqué',
      date: '25/01/2020',
      contenu: 'Il est surement parti sur du léthal bien trop tot, mais quelle erreur'
    }]);
  }
}
