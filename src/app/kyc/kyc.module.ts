import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KycPage } from './kyc.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/kyc/kyc-info',
    pathMatch: 'full'
  },
  {
    path: '',
    component: KycPage,
    children: [
      { path: 'kyc-info', loadChildren: './kyc-info/kyc-info.module#KycInfoPageModule' },
      { path: 'policy', loadChildren: './policy/policy.module#PolicyPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KycPage]
})
export class KycPageModule {}
