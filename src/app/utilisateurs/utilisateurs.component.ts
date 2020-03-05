import { GetUtilisateursService } from './../get-utilisateurs.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<User>;
  utilisateurs: Observable<any[]>;
  constructor(db: AngularFirestore, private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<User>('Utilisate urs');
    this.utilisateurs = db.collection('Utilisate urs').valueChanges();
  }
  ngOnInit() {
  }

}
