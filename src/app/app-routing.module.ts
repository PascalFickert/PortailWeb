import { LoginComponent } from './login/login.component';
import { AddActuComponent } from './add-actu/add-actu.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'dash', component: DashComponent },
  { path: 'dragndrop', component: DragndropComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },
  { path: 'actualite', component: ActualiteComponent },
  { path: 'add-actualite', component: AddActuComponent },
  { path: 'login', component: LoginComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectLoggedInToDashboard}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
