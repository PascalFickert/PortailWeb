import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthentificationService } from './../authentification.service';

export interface Item { mail: string, mdp: string }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  profileForm = this.fb.group({
    mail: ['', [Validators.email, Validators.required]],
    mdp: ['', [Validators.minLength(8), Validators.required]],
  });
  private itemsCollection: AngularFirestoreCollection<Item>;
  constructor(private afs: AngularFirestore, private fb: FormBuilder, private auth: AuthentificationService) {
    this.itemsCollection = afs.collection<Item>('Utilisateurs');
  }

  ngOnInit() {
  }
  onSubmit() {

    const mail = this.profileForm.value.mail;
    const mdp = this.profileForm.value.mdp;
    this.auth.connectToFirebase();
    const item: Item = {mail, mdp};
    this.itemsCollection.add(item);
  }

}
