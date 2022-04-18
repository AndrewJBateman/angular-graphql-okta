import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'data',
    component: DataComponent,
    canActivate: [OktaAuthGuard],
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
