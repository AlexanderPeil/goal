import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchdayComponent } from './components/matchday/matchday.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'Spieltag/:leagueId', component: MatchdayComponent },
  { path: 'Tabelle/:leagueId', component: TableComponent },
  { path: 'match-info/:matchId', component: MatchInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
