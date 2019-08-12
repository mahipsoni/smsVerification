import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

import { OtpVerificationPage } from './otp-verification.page';

const routes: Routes = [
  {
    path: '',
    component: OtpVerificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    FirebaseAuthentication
  ],
  declarations: [OtpVerificationPage]
})
export class OtpVerificationPageModule {}
