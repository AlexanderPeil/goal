import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  baseUrl = 'https://api.openligadb.de';
  getMatchData = '/getmatchdata/';
  getcurrentgroup = '/getcurrentgroup/';

  constructor(private http: HttpClient) { }


  getMatchesByLeague(leagueId: string): Observable<any> {
    const url = `${this.baseUrl}${this.getMatchData}${leagueId}`;
    return this.http.get(url);
  }


  getCurrentGroup(leagueId: string):Observable<any> {
    const url = `${this.baseUrl}${this.getcurrentgroup}${leagueId}`;
    return this.http.get(url);
  }

}
