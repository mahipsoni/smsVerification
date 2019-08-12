import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { LoadingController, NavController } from '@ionic/angular';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})

export class SigninPage implements OnInit {
  signInForm: any;
  loader: any = null;
  constructor(
    public firebaseAuthentication: FirebaseAuthentication,
    public loadingController: LoadingController,
    public navCtrl: NavController,
    public signInService: SigninService
  ) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[6-9]\\d{9}')])
    });
  }

  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Please wait...',
    });
    return await this.loader.present();
  }

  phoneAuth() {
    this.presentLoading();
    const phoneNumber = this.signInForm.get('phoneNumber').value;
    this.firebaseAuthentication.verifyPhoneNumber(`+91${phoneNumber}`, 30000).then((verifiId: string) => {
      this.signInService.setVerificationId(verifiId);
      this.loader.dismiss();
      this.navCtrl.navigateRoot(['/otp-verification']);
    }).catch((error) => {
      this.loader.dismiss();
      console.log('error', error);
    });
  }
}
