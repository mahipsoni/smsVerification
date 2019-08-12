import { Component, OnInit } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { SigninService } from '../signin/signin.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.page.html',
  styleUrls: ['./otp-verification.page.scss'],
})
export class OtpVerificationPage implements OnInit {
  verificationId: string;
  constructor(
    public singInService: SigninService,
    public firebaseAuthentication: FirebaseAuthentication
  ) { }

  ngOnInit() {
    this.verificationId = this.singInService.getVerificationId();
  }

  signInWithCode(){
    this.firebaseAuthentication.signInWithVerificationId(this.verificationId, 123456).then((user) => {
      console.log(user);
    });
  }

}
