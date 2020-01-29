import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { TreeComponent } from './tree/tree.component';
import { DashComponent } from './dash/dash.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'dash', component: DashComponent },
  { path: 'dragndrop', component: DragndropComponent },
  { path: 'utilisateurs', component: UtilisateursComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
