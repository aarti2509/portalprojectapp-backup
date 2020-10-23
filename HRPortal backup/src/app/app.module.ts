import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProfileComponent } from './add-profile/add-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { UpdateCandidateComponent } from './update-candidate/update-candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MaterialModule} from './material/material.module';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    AddProfileComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ViewCandidateComponent,
    HeaderComponent,
    UpdateCandidateComponent,
    CandidateDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
