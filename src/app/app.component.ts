import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyABwHe_8_7-Rgb12lXjlnMwUgIqXV6dx-Q",
    authDomain: "kamga-c0dfa.firebaseapp.com",
    databaseURL: "https://kamga-c0dfa.firebaseio.com",
    projectId: "kamga-c0dfa",
    storageBucket: "kamga-c0dfa.appspot.com",
    messagingSenderId: "341068704772",
    appId: "1:341068704772:web:e892b72fc82be2c6125951",
    measurementId: "G-XX1ECHJHW0"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

}
}
