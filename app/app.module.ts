import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule }  from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from './auth.guard';

const ROUTES = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];

const firebaseConfig = {
    apiKey: "AIzaSyCAYM__UiK2uLQRYBe84227JKsYsU_Vn2g",
    authDomain: "angular-love.firebaseapp.com",
    databaseURL: "https://angular-love.firebaseio.com",
    projectId: "angular-love",
    storageBucket: "angular-love.appspot.com",
    messagingSenderId: "721645252435"
  };

@NgModule({
  imports: [ 
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireAuthModule,
  ],
  declarations: [ AppComponent, LoginComponent, DashboardComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
