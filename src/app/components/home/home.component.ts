import { Component, OnInit } from '@angular/core';
import { CurrentMatchData, CurrentSeasonData, MatchDataFromApi } from 'src/app/services/interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  leagueName: string = '';
  groupName: string = '';
  matchDateTime: string = '';
  teamIconUrl: string = '';
  teamName: string = '';

  matches: CurrentMatchData[] = [];


  constructor(private ls: LeagueService) { }


  ngOnInit(): void {
    this.loadLeagueMatches('bl1');
    this.loadCurentMatchday('bl1');
  }


  loadLeagueMatches(leagueId: string) {
    this.ls.getMatchesByLeague(leagueId).subscribe((data: MatchDataFromApi[]) => {
      console.log(data);
      this.getCurrentLeagueData(data);
      this.getCurrentMatchDay(data);
    });
  }

  loadCurentMatchday(leagueId: string) {
    this.ls.getCurrentGroup(leagueId).subscribe((data: CurrentSeasonData) => {
      this.groupName = data.groupName;
    })
  }


  getCurrentLeagueData(leagueData: MatchDataFromApi[]) {
    this.leagueName = leagueData[0].leagueName;
  }


  getCurrentMatchDay(matchData: CurrentMatchData[]) {
    this.matches = matchData.map(match => ({
      matchDateTime: match.matchDateTime,
      team1: {
        teamName: match.team1.teamName,
        teamIconUrl: match.team1.teamIconUrl
      },
      team2: {
        teamName: match.team2.teamName,
        teamIconUrl: match.team2.teamIconUrl
      },
    }));  
  }

}
