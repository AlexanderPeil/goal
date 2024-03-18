export interface CurrentSeasonData {
    leagueName: string;
    groupName: string;
}

export interface TeamInfo {
    teamName: string;
    teamIconUrl: string;
}

export interface CurrentMatchData {
    matchID: number;
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


export interface CurrentMatchInfo {
    matchID: number;
    matchDateTime: string;
    matchIsFinished: boolean;
    matchResults: MatchResult[];
    team1: {
        teamName: string;
        teamIconUrl: string;
    };
    team2: {
        teamName: string;
        teamIconUrl: string;
    };
    goals?: Goals[];
}


export interface Goals {
    scoreTeam1: number;
    scoreTeam2: number;
    matchMinute: number;
    goalGetterName: string;
    isPenalty: boolean;
    isOwnGoal: boolean;
    isOvertime: boolean;
}