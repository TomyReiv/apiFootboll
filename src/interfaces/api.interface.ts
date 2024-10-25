export interface api {
    rank:        number;
    team:        Team;
    points:      number;
    goalsDiff:   number;
    group:       string;
    form:        string;
    status:      string;
    description: string;
    all:         All;
    home:        All;
    away:        All;
    update:      Date;
}

export interface All {
    played: number;
    win:    number;
    draw:   number;
    lose:   number;
    goals:  Goals;
}

export interface Goals {
    for:     number;
    against: number;
}

export interface Team {
    id:   number;
    name: string;
    logo: string;
}