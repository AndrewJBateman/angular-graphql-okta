import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then(m => m.DataModule),
    canActivate: [OktaAuthGuard]
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), OktaAuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
