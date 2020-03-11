import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => true),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private angularFireAuth: AngularFireAuth) {}
logout(){
  this.angularFireAuth
.auth
.signOut();
}

ToggleNavBar () {
  let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
  if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
      element.click();
  }
}

}
