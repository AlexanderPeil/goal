export interface CurrentSeasonData {
    leagueName: string;
    groupName: string; 
}

export interface TeamInfo {
    teamName: string;
    teamIconUrl: string;
}

export interface CurrentMatchData {
    matchDateTime: string;
    team1: TeamInfo;
    team2: TeamInfo;
    // matchIsFinished: boolean;
    // matchResults: any[]; 
    // goals: any[]; 
    // location: any; 
}

export interface MatchDataFromApi {
    matchID: number;
    leagueId: number;
    leagueName: string;
    leagueSeason: number;
    leagueShortcut: string;
    matchDateTime: string;
    matchDateTimeUTC: string;
    group: {
        groupName: string;
        groupOrderID: number;
        groupID: number;
    };
    team1: {
        teamId: number;
        teamName: string;
        shortName: string;
        teamIconUrl: string;
        teamGroupName: null | string;
    };
    team2: {
        teamId: number;
        teamName: string;
        shortName: string;
        teamIconUrl: string;
        teamGroupName: null | string;
    };
    lastUpdateDateTime: string;
    // matchIsFinished: boolean;
    // matchResults: any[];
    // goals: any[];
    // location: null | string;
    // numberOfViewers: null | number;
}