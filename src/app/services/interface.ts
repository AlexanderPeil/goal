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
    matchResults: MatchResult[];
    halfTimeResult?: MatchResult;
    finalResult?: MatchResult;
}

export interface MatchDataFromApi {
    matchID: number;
    leagueId: number;
    leagueName: string;
    leagueSeason: number;
    leagueShortcut: string;
    matchDateTime: string;
    group: {
        groupName: string;
        groupOrderID: number;
        groupID: number;
    };
    team1: {
        teamName: string;
        teamIconUrl: string;
    };
    team2: {
        teamName: string;
        teamIconUrl: string;
    };
    matchResults: MatchResult[];
    lastUpdateDateTime: string;
}

export interface MatchResult {
    resultName: string;
    pointsTeam1: string;
    pointsTeam2: string;
}


// export interface MatchDisplayResult {
//     matchID: number;
//     team1: string;
//     team2: string;
//     halfTimeResult?: {
//       pointsTeam1: number;
//       pointsTeam2: number;
//     };
//     endResult?: {
//       pointsTeam1: number;
//       pointsTeam2: number;
//     };
//   }


export interface TableData {
    teamName: string;
    teamIconUrl: string;
    won: number;
    lost: number;
    draw: number;
    goals: number;
    goalDiff: number;
    opponentGoals: number;
    points: number;
}