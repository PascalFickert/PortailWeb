import { News } from './../news';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthentificationService } from './../authentification.service';
import { getLocaleDateFormat, formatDate, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-actu',
  templateUrl: './add-actu.component.html',
  styleUrls: ['./add-actu.component.scss']
})
export class AddActuComponent implements OnInit {
  profileForm = this.fb.group({
    titre: ['', [Validators.minLength(12), Validators.required]],
    contenu: ['', [Validators.minLength(100), Validators.required]]
  });
  mydate: any;
  dateString: string;
  private itemsCollection: AngularFirestoreCollection<News>;
  constructor(private router: Router, private afs: AngularFirestore, private fb: FormBuilder, private auth: AuthentificationService) {
    this.itemsCollection = afs.collection<News>('Actualite');

  }

  ngOnInit() {
    this.mydate = new Date();
    const datePipe = new DatePipe('en-US');
    this.mydate = datePipe.transform(this.mydate, 'dd/MM/yyyy');
    this.dateString = this.mydate.toString();
  }

  onSubmit() {
    const titre = this.profileForm.value.titre;
    const date = this.dateString;
    const contenu = this.profileForm.value.contenu;
    this.auth.connectToFirebase();
    const news: News = {titre, date, contenu};
    this.itemsCollection.add(news);
    alert('Actualité enregistrée avec succès, vous allez être redirigé vers la liste des actus');
    this.router.navigate(['actualite']);
  }
}
