import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from '../services/auth.service';
import { CdbService} from '../services/cdb.service';
import {DdbService} from '../services/ddb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  constructor(private authService: AuthService, private cdb: CdbService, private ddb:DdbService) { }
/*on verifi si le user est connecter ou pas*/
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
/*methode permettant a l'utilisateur de se deconnecter*/

onSignOut() {
    this.authService.signOutUser();
}
lala() {
  this.cdb.deidoc();
}
  lolo() {
    this.ddb.deidod();
  }
}
