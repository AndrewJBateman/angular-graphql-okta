import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OKTA_CONFIG } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from "../environments/environment";

const OKTA_DOMAIN = environment.okta.OKTA_DOMAIN;
const CLIENT_ID = environment.okta.CLIENT_ID;
const HOST = 'localhost:4200';
const CALLBACK_PATH = '/login/callback';

const ISSUER = `https://${OKTA_DOMAIN}/oauth2/default`;
const REDIRECT_URI = `http://${HOST}${CALLBACK_PATH}`;

const config = {
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: REDIRECT_URI,
};
const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    {
      provide: OKTA_CONFIG,
      useValue: { oktaAuth },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
