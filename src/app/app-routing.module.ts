import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessComponent} from './business/business.component';
import {HomeComponent} from './home/home.component';
import {AddBusinessComponent} from './add-business/add-business.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-business', component: AddBusinessComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'business/:id', component: BusinessComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
