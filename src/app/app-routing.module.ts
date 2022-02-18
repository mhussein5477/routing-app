import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Route[] = [
  {path:'' , redirectTo : '/home'  , pathMatch : 'full'},
  {path:'home', component: HomeComponent },
  {path:'settings', component: SettingsComponent },
  {path:'**' , component:  PageNotFoundComponent},


] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
