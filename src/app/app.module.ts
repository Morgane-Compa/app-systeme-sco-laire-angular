import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { AddingModalComponentComponent } from './components/adding-modal-component/adding-modal-component.component';
import { PostComponentComponent } from './components/post-component/post-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { ProfileCardComponentComponent } from './components/profile-card-component/profile-card-component.component';
import { LeftBackgroundComponentComponent } from './components/left-background-component/left-background-component.component';
import { RightBackgroundComponentComponent } from './components/right-background-component/right-background-component.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ServiceTermsComponent } from './pages/service-terms/service-terms.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { UnsubscriptionConditionsComponent } from './pages/unsubscription-conditions/unsubscription-conditions.component';
import { CopyrightsPolicyComponent } from './pages/copyrights-policy/copyrights-policy.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LegalPagesComponent } from './pages/legal-pages/legal-pages.component';
import { PhotoGalerieComponent } from './pages/photo-galerie/photo-galerie.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FeedPageComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    WhoWeAreComponent,
    AddingModalComponentComponent,
    PostComponentComponent,
    HeaderComponentComponent,
    ActionButtonComponent,
    ProfileCardComponentComponent,
    LeftBackgroundComponentComponent,
    RightBackgroundComponentComponent,
    PrivacyPolicyComponent,
    ServiceTermsComponent,
    CookiePolicyComponent,
    UnsubscriptionConditionsComponent,
    CopyrightsPolicyComponent,
    ContactComponent,
    LegalPagesComponent,
    PhotoGalerieComponent,
    RegisterPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
