import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase";
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebase);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  editorUser: boolean = false;
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {

    this.isLoggedIn$ = this.afAuth.authState.pipe(map(user => !!user));
    this.isLoggedOut$=this.isLoggedIn$.pipe(map((loggedIn=>!loggedIn)))
  }

  signOut() {
    this.afAuth.signOut();
  }

}
