import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BundesligaTableComponent } from './leagues/germany/bundesliga/bundesliga-table/bundesliga-table.component';
import { BundesligaMatchdayComponent } from './leagues/germany/bundesliga/bundesliga-matchday/bundesliga-matchday.component';
import { BundesligaTeamsComponent } from './leagues/germany/bundesliga/bundesliga-teams/bundesliga-teams.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'bundesliga-table', component: BundesligaTableComponent},
  { path: 'bundesliga-matchday', component:BundesligaMatchdayComponent},
  { path: 'bundesliga-teams', component:BundesligaTeamsComponent},
  { path: 'match-info/:matchId', component:MatchInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
