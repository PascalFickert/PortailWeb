import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from './../authentification.service';
import { Observable } from 'rxjs';
export interface Item { mail: string; mdp: string; }
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
  allowedUsers: Observable<any[]>;
  constructor(private router: Router, private angularFireAuth: AngularFireAuth,
              private fb: FormBuilder) {
      }

  ngOnInit() {
  }
  onSubmit() {

    const mail = this.profileForm.value.mail;
    const mdp = this.profileForm.value.mdp;
    this.SignIn(mail, mdp);
  }

  SignIn(email: string, password: string) {
    /*console.log(email);
    console.log(password);*/
    this.angularFireAuth
    .auth
    .signInWithEmailAndPassword(email, password)
    //.then(res => this.router.navigate(['app-navbar']))
    .catch(err => {
      alert('Mot de passe et/ou adresse mail incorrect.e.s');
    });
    }

    /* Sign out */
    SignOut() {
    this.angularFireAuth.auth.signOut();
    }

}
