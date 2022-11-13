import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './page/aboutus/aboutus.component';
import { ContactComponent } from './page/contact/contact.component';
import { HomeComponent } from './page/home/home.component';
import { PagenotfoundComponent } from './page/pagenotfound/pagenotfound.component';
import { ServiceComponent } from './page/service/service.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'**',component:PagenotfoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
