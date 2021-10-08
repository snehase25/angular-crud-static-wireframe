import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Member/add/add.component';
import { DetailComponent } from './Member/detail/detail.component';
import { EditComponent } from './Member/edit/edit.component';
import { ListComponent } from './Member/list/list.component';

const routes: Routes = [
  {path:'', redirectTo: '/list', pathMatch:'full'},
  {path:'list', component: ListComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'detail', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
