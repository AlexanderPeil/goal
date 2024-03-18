import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BundesligaTableComponent } from './leagues/germany/bundesliga/bundesliga-table/bundesliga-table.component';
import { BundesligaMatchdayComponent } from './leagues/germany/bundesliga/bundesliga-matchday/bundesliga-matchday.component';
import { BundesligaTeamsComponent } from './leagues/germany/bundesliga/bundesliga-teams/bundesliga-teams.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BundesligaTableComponent,
    BundesligaMatchdayComponent,
    BundesligaTeamsComponent,
    MatchInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
