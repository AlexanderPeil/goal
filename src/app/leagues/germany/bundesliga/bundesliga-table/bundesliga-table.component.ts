import { Component, OnInit } from '@angular/core';
import { TableData } from 'src/app/services/interface';
import { LeagueService } from 'src/app/services/league.service';

@Component({
  selector: 'app-bundesliga-table',
  templateUrl: './bundesliga-table.component.html',
  styleUrls: ['./bundesliga-table.component.scss']
})
export class BundesligaTableComponent implements OnInit {
  table: TableData[] = [];
  currentPlace: number[] = [];


  constructor(private ls: LeagueService) { }


  ngOnInit() {
    this.loadTable('bl1');
    this.currentPosition();
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
    this.currentPlace = Array.from({length: 18}, (_, i) => i + 1);
  }

}
