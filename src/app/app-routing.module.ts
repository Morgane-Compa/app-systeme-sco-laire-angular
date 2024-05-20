import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { FeedPageComponent } from './pages/feed-page/feed-page.component';
import { ConfidentialPoliticComponent } from './pages/confidential-politic/confidential-politic.component';
import { CookiesPoliticComponent } from './pages/cookies-politic/cookies-politic.component';
import { UseConditionsComponent } from './pages/use-conditions/use-conditions.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UnsubscribeConditionsComponent } from './pages/unsubscribe-conditions/unsubscribe-conditions.component';

const routes: Routes = [
  {
    path:"",
    component: FeedPageComponent
  },
  {
    path: "profile/:id",
    component: ProfilePageComponent
  },
  {
    path: "confidential-politic",
    component: ConfidentialPoliticComponent
  },
  {
    path: "cookies-politic",
    component: CookiesPoliticComponent
  },
  {
    path: "use-condition",
    component: UseConditionsComponent
  },
  {
    path: "unsubscribe",
    component: UnsubscribeConditionsComponent
  },
  {
    path: "contact",
    component: ContactComponent
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
