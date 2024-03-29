import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';
import { CurrentMatchData, CurrentSeasonData, MatchDataFromApi } from 'src/app/services/interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.scss']
})
export class MatchdayComponent implements OnInit {
  leagueName: string = '';
  groupName: string = '';
  matchDateTime: string = '';
  teamIconUrl: string = '';
  teamName: string = '';
  matches: CurrentMatchData[] = [];
  // results: MatchDisplayResult[] = [];


  constructor(
    private ls: LeagueService,
    private fs: FavouritesService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    // this.loadLeagueMatches('bl1');
    this.getCurrentLeagueId();
    this.loadCurentMatchday('bl1');
  }


  getCurrentLeagueId() {
    this.route.paramMap.subscribe(params => {
      const leagueId = params.get('leagueId');
      if (leagueId) {
        this.loadLeagueMatches(leagueId);
      }
    })
  }


  loadLeagueMatches(leagueId: string) {
    this.ls.getMatchesByLeague(leagueId).subscribe((data: MatchDataFromApi[]) => {
      console.log(data);
      this.getCurrentLeagueData(data);
      this.getCurrentMatchDay(data);
      // this.checkForResults(data);
    });
  }

  loadCurentMatchday(leagueId: string) {
    this.ls.getGroupByLeague(leagueId).subscribe((data: CurrentSeasonData) => {
      this.groupName = data.groupName;
    })
  }


  getCurrentLeagueData(leagueData: MatchDataFromApi[]) {
    this.leagueName = leagueData[0].leagueName;
  }


  getCurrentMatchDay(matchData: MatchDataFromApi[]) {
    this.matches = matchData.map(match => {
      const finalResult = match.matchResults.find(result => result.resultName === 'Endergebnis');
      const halfTimeResult = match.matchResults.find(result => result.resultName === 'Halbzeitergebnis');

      return {
        matchID: match.matchID,
        matchDateTime: match.matchDateTime,
        team1: {
          teamName: match.team1.teamName,
          teamIconUrl: match.team1.teamIconUrl,
        },
        team2: {
          teamName: match.team2.teamName,
          teamIconUrl: match.team2.teamIconUrl,
        },
        matchResults: match.matchResults.map(result => ({
          resultName: result.resultName,
          pointsTeam1: result.pointsTeam1,
          pointsTeam2: result.pointsTeam2,
        })),
        halfTimeResult: halfTimeResult ? {
          resultName: halfTimeResult.resultName,
          pointsTeam1: halfTimeResult.pointsTeam1,
          pointsTeam2: halfTimeResult.pointsTeam2,
        } : undefined,
        finalResult: finalResult ? {
          resultName: finalResult.resultName,
          pointsTeam1: finalResult.pointsTeam1,
          pointsTeam2: finalResult.pointsTeam2,
        } : undefined
      };
    });
  } 

}
