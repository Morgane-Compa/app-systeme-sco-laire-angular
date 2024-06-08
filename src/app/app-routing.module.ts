import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CookiePolicyComponent } from './pages/cookie-policy/cookie-policy.component';
import { CopyrightsPolicyComponent } from './pages/copyrights-policy/copyrights-policy.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ServiceTermsComponent } from './pages/service-terms/service-terms.component';
import { UnsubscriptionConditionsComponent } from './pages/unsubscription-conditions/unsubscription-conditions.component';
import { LegalPagesComponent } from './pages/legal-pages/legal-pages.component';
import { PhotoGalerieComponent } from './pages/photo-galerie/photo-galerie.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "register",
    component: RegisterPageComponent
  },
  {
    path: "news-feed",
    component: FeedPageComponent
  },
  {
    path: "profile/:id",
    component: ProfilePageComponent
  },
  {
    path: "galerie",
    component: PhotoGalerieComponent
  },
  {
    path: "legal-pages",
    component: LegalPagesComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "cookie-policy",
    component: CookiePolicyComponent
  },
  {
    path: "copyrights-policy",
    component: CopyrightsPolicyComponent
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent
  },
  {
    path: "service-terms",
    component: ServiceTermsComponent
  },
  {
    path: "unsubscribe",
    component: UnsubscriptionConditionsComponent
  },
  {
    path:"not-found",
    component: NotFoundPageComponent
  },
  {
    path: "**",
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
