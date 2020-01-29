import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    let mail = this.profileForm.value.mail;
    let mdp = this.profileForm.value.mdp;
    console.warn(`You are: ${mail}`);
    console.warn(`Your mdp is: ${mdp}`);
  }
}
