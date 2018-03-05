import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditRouteComponent } from './add-edit-route/add-edit-route.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: StartComponent, pathMatch: "full" },
  { path: 'route/add', component: AddEditRouteComponent },
  { path: 'route/edit', component: AddEditRouteComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}