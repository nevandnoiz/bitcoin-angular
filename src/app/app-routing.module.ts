import { NgModule } from '@angular/core';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ContactsDetailsComponent } from './pages/contacts-details/contacts-details.component';
import { ContactsEditComponent } from './pages/contacts-edit/contacts-edit.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  {
    path: '', canActivate: [AuthGuardService], children: [
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      {
        path: 'contacts', children: [
          { path: '', component: ContactsComponent },
          { path: 'edit', component: ContactsEditComponent },
          { path: 'edit/:contactId', component: ContactsEditComponent },
          { path: ':contactId', component: ContactsDetailsComponent },
        ]
      },
      { path: 'statistics', component: StatisticsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
