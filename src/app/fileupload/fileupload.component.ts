import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import {FormBuilder, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  profileForm = this.fb.group({
  });
  constructor(private fb: FormBuilder, private router: Router) { }

  fichier: any = null;

  ngOnInit() {
  }
  onSubmit(event: any) {
    /*
    alert('Erreur lors de l\'upload, vous allez être redirigé vers la page d\'accueil');
    this.router.navigate(['dash']);
    */
  }

}
