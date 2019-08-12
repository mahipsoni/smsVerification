import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { IonicModule } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { SigninService } from './signin.service';
import { SigninPage } from './signin.page';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'epaysa'),
    RouterModule.forChild(routes)
  ],
  providers: [
    FirebaseAuthentication,
    SigninService
  ],
  declarations: [SigninPage]
})
export class SigninPageModule {}
