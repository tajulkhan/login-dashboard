import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NewpageComponent } from './newpage/newpage.component';
import { AboutComponent } from './about/about.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"newpage",component:NewpageComponent},
  {path:"",component:LoginComponent},
  {path:"about",component:AboutComponent},
  {path:"our-vision",component:OurVisionComponent},
  {path:"profile",component:ProfileComponent},
  {path:"contacts",component:ContactsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
