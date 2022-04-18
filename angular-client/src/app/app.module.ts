import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataComponent } from './data/data.component';

const OKTA_DOMAIN = 'dev-65637828.okta.com';
const CLIENT_ID = '0oa4p9x9mmkDStvIz5d7';
const HOST = 'localhost:4200';
const CALLBACK_PATH = '/login/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;

const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI
};
const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, DataComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
