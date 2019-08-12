import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  verificationId: string;
  constructor(private httpClient: HttpClient) { }

  setVerificationId(verifId: string) {
    this.verificationId = verifId;
  }

  getVerificationId() {
    return this.verificationId;
  }
}
