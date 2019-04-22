import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { ContactsDetailsComponent } from './pages/contacts-details/contacts-details.component';
import { ContactsEditComponent } from './pages/contacts-edit/contacts-edit.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactsService } from './services/contacts.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleChartComponent } from './google-chart/google-chart.component';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    HeaderComponent,
    MovesListComponent,
    TransferFundComponent,
    ContactsDetailsComponent,
    ContactsEditComponent,
    ContactsComponent,
    HomePageComponent,
    SignUpComponent,
    StatisticsComponent,
    GoogleChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule.forRoot()
  ],
  providers: [ContactsService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
