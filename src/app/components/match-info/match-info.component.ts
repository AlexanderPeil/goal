import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentMatchInfo, Goals } from 'src/app/services/interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.scss']
})
export class MatchInfoComponent implements OnInit {
  matchDetails: CurrentMatchInfo | null = null;


  constructor(
    public activatedRoute: ActivatedRoute,
    private ls: LeagueService
  ) {}


  ngOnInit() {
    this.getCurrentMatchInfo();
  }


  getCurrentMatchInfo() {
    this.activatedRoute.paramMap.subscribe((params) => {
      const matchId = params.get('matchId');
      if(matchId) {
        this.ls.getMatchById(+matchId).subscribe(
          details => {
            this.matchDetails = details;
            console.log(this.matchDetails);            
          }
        )
      }     
    })
  }

}
