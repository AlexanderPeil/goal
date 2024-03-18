import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  baseUrl = 'https://api.openligadb.de';
  getMatchData = '/getmatchdata/';
  getCurrentGroup = '/getcurrentgroup/';
  getCurrentTable = '/getbltable/';

  constructor(private http: HttpClient) { }


  getMatchesByLeague(leagueId: string): Observable<any> {
    const url = `${this.baseUrl}${this.getMatchData}${leagueId}`;
    return this.http.get(url);
  }


  getGroupByLeague(leagueId: string):Observable<any> {
    const url = `${this.baseUrl}${this.getCurrentGroup}${leagueId}`;
    return this.http.get(url);
  }


  getTableByLeague(leagueId: string): Observable<any> {
    const url = `${this.baseUrl}${this.getCurrentTable}${leagueId}/${2023}`;
    return this.http.get(url);
  }


  getMatchById(matchId: number): Observable<any> {
    const url = `${this.baseUrl}${this.getMatchData}${matchId}`;
    return this.http.get(url);
  }

}
