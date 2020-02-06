import { GetUtilisateursService } from './../get-utilisateurs.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs: User[];
  constructor(private getUsersService: GetUtilisateursService) { }

  ngOnInit() {
    this.getUsersService.getAllUtilisateurs().subscribe(utilisateurs => this.utilisateurs = utilisateurs);
  }

}
