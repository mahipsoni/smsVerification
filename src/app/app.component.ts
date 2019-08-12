import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'contacts'
    },
    {
      title: 'How Does it Work',
      url: '/how-work',
      icon: 'key'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'help-circle-outline'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'mail'
    },
    {
      title: 'eKyc',
      children: [
        {
          title: 'eKyc Information',
          url: '/kyc/kyc-info',
          icon: 'wallet'
        },
        {
          title: 'eKyc Policy',
          url: '/kyc/policy',
          icon: 'today'
        }
      ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
