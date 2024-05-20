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
import { ConfidentialPoliticComponent } from './pages/confidential-politic/confidential-politic.component';
import { CookiesPoliticComponent } from './pages/cookies-politic/cookies-politic.component';
import { UseConditionsComponent } from './pages/use-conditions/use-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UnsubscribeConditionsComponent } from './pages/unsubscribe-conditions/unsubscribe-conditions.component';

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
    ConfidentialPoliticComponent,
    CookiesPoliticComponent,
    UseConditionsComponent,
    ContactComponent,
    UnsubscribeConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
