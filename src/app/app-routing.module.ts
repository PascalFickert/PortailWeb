import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AddActuComponent } from './add-actu/add-actu.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dash']);

const routes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'add-actualite', component: AddActuComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: DashComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard],
  data: {authGuardPipe: redirectLoggedInToDashboard, redirectUnauthorizedToLogin}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
