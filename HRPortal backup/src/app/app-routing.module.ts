import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

import { from } from 'rxjs';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'add-profile',component:AddProfileComponent},
  {path:'view-candidate',component:ViewCandidateComponent},
  {path:'update/:id',component:UpdateCandidateComponent},
  {path:'details/:id',component:CandidateDetailsComponent},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
