import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableData } from 'src/app/services/interface';
import { LeagueService } from 'src/app/services/league.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  table: TableData[] = [];
  currentPlace: number[] = [];


  constructor(
    private ls: LeagueService,
    private route: ActivatedRoute) { }


  ngOnInit() {
    // this.loadTable('bl1');
    this.getCurrentRouteData();
    this.currentPosition();
  }


  getCurrentRouteData() {    
    this.route.paramMap.subscribe(params => {
      const leagueId = params.get('leagueId');
      if (leagueId) {
        this.loadTable(leagueId);
      }
    })
  }


  loadTable(leagueId: string) {
    this.ls.getTableByLeague(leagueId).subscribe((data: TableData[]) => {
      this.table = data;
      console.log(this.table);
    })
  }


  playedgames(team: TableData) {
    let sumOfAllGames = team.won + team.draw + team.lost;
    return sumOfAllGames;
  }


  currentPosition() {
    this.currentPlace = Array.from({ length: 18 }, (_, i) => i + 1);
  }

}
