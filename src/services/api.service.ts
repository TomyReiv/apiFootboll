import dotenv from "dotenv";

dotenv.config();

export const getAllMatches = async (
  from: any,
  to: any,
  match_id: any,
  league: any
) => {
  try {
    const baseUrl = process.env.API_URL;
    let url: any;
    if (league) {
      url = `${baseUrl}get_events&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }&league_id=${league}`;
    } else if (match_id) {
      url = `${baseUrl}get_events&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }&match_id=${match_id}`;
    } else {
      url = `${baseUrl}get_events&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response) throw new Error("Error al obtener datos");

    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const filteredResults = result.map((item: any) => ({
      league_name: item.league_name,
      league_id: item.league_id,
      match_id: item.match_id,
      match_date: item.match_date,
      hometeam_id: item.match_hometeam_id,
      homeTeam: item.match_hometeam_name,
      awayteam_id: item.match_awayteam_id,
      awayTeam: item.match_awayteam_name,
      hometeam_score: item.match_hometeam_score,
      awayteam_score: item.match_awayteam_score,
      home_prob: item.prob_HW,
      draw_prob: item.prob_D,
      away_prob: item.prob_AW,
      team_home_badge: item.team_home_badge,
      team_away_badge: item.team_away_badge,
      match_status: item.match_status,
      goalscorer: item.goalscorer,
    }));

    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getMatch = async (
  from: any,
  to: any,
  match_id: any,
  league: any
) => {
  try {
    let url: any;
    const baseUrl = process.env.API_URL;
    if (league) {
      url = `${baseUrl}get_predictions&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }&league_id=${league}`;
    } else if (match_id) {
      url = `${baseUrl}get_predictions&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }&match_id=${match_id}`;
    } else {
      url = `${baseUrl}get_predictions&from=${from}&to=${to}&APIkey=${
        process.env.API_KEY_APIFOOTBALL || ""
      }`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response) throw new Error("Error al obtener datos");

    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const filteredResults = result.map((item: any) => ({
      country_name: item.country_name,
      country_id: item.country_id,
      league_id: item.league_id,
      league_name: item.league_name,
      match_id: item.match_id,
      match_date: item.match_date,
      hometeam_id: item.match_hometeam_id,
      homeTeam: item.match_hometeam_name,
      awayteam_id: item.match_awayteam_id,
      awayTeam: item.match_awayteam_name,
      hometeam_score: item.match_hometeam_score,
      awayteam_score: item.match_awayteam_score,
      home_prob: item.prob_HW,
      draw_prob: item.prob_D,
      away_prob: item.prob_AW,
      match_status: item.match_status,
    }));

    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getRecords = async (
  to: any,
  league: any,
  team_a: any,
  team_b: any
) => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_predictions&from=2022-05-10&to=${to}&APIkey=${
      process.env.API_KEY_APIFOOTBALL || ""
    }&league_id=${league}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response) throw new Error("Error al obtener datos");

    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const record = result.filter((item: any) => {
      return (
        (item.match_hometeam_name === team_a &&
          item.match_awayteam_name === team_b) ||
        (item.match_hometeam_name === team_b &&
          item.match_awayteam_name === team_a)
      );
    });

    const filteredResults = record.map((item: any) => ({
      country_name: item.country_name,
      country_id: item.country_id,
      league_id: item.league_id,
      league_name: item.league_name,
      match_id: item.match_id,
      match_date: item.match_date,
      hometeam_id: item.match_hometeam_id,
      homeTeam: item.match_hometeam_name,
      awayteam_id: item.match_awayteam_id,
      awayTeam: item.match_awayteam_name,
      hometeam_score: item.match_hometeam_score,
      awayteam_score: item.match_awayteam_score,
      home_prob: item.prob_HW,
      draw_prob: item.prob_D,
      away_prob: item.prob_AW,
    }));
    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getCountries = async () => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_countries&APIkey=${process.env.API_KEY_APIFOOTBALL}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    return result;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getLeague = async (id: any) => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_leagues&country_id=${id}&APIkey=${process.env.API_KEY_APIFOOTBALL}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getTeam = async (id: any) => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_teams&league_id=${id}&APIkey=${process.env.API_KEY_APIFOOTBALL}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const filteredResults = result.map((item: any) => ({
      team_id: item.team_key,
      team_name: item.team_name,
      team_country: item.team_country,
      team_logo: item.team_badge,
    }));
    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getPlayer = async (id: any, tid: any) => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_teams&league_id=${id}&team_id=${tid}&APIkey=${process.env.API_KEY_APIFOOTBALL}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const filteredResults = result.map((item: any) => ({
      team_players: item.players.map((player: any) => ({
        player_name: player.player_name,
        player_image: player.player_image,
        player_number: player.player_number,
        player_type: player.player_type,
        player_age: player.player_age,
        player_goals: player.player_goals,
        player_assists: player.player_assists,
        player_red_cards: player.player_red_cards,
      })),
    }));
    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getPOnePlayer = async (name: any) => {
  try {
    const baseUrl = process.env.API_URL;
    const url = `${baseUrl}get_players&player_name=${name}&APIkey=${process.env.API_KEY_APIFOOTBALL}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const filteredResults = result.map((item: any) => ({
      player_id: item.player_key,
      player_name: item.player_name,
      player_country: item.player_country,
      player_image: item.player_image,
      player_number: item.player_number,
      player_type: item.player_type,
      player_age: item.player_age,
      player_goals: item.player_goals,
      player_team: item.team_name,
      player_rating: item.player_rating,
    }));
    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const getStandings = async (id: any, season: any) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}standings?league=${id}&season=${season}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response[0].league.standings;
    const filteredResults = info.flatMap((subArray: any[]) =>
      subArray.map((item: any) => ({
        rank: item.rank,
        team: item.team,
        points: item.points,
        goalsDiff: item.goalsDiff,
      }))
    );
    return filteredResults;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const newFixture = async (
  league: any,
  season: any,
  from: any,
  to: any
) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}fixtures?league=${league}&timezone=America/Argentina/Buenos_Aires&season=${season}&from=${from}&to=${to}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response;
    
    const filteredData = info.map((item: any) => ({
      fixtureId: item.fixture.id,
      referee: item.fixture.referee,
      date: item.fixture.date,
      venue: {
        id: item.fixture.venue.id,
        name: item.fixture.venue.name,
        city: item.fixture.venue.city,
      },
      status: {
        long: item.fixture.status.long,
        elapsed: item.fixture.status.elapsed,
      },
      league: {
        id: item.league.id,
        name: item.league.name,
        country: item.league.country,
        logo: item.league.logo,
        flag: item.league.flag
      },
      teams: {
        home: {
          id: item.teams.home.id,
          name: item.teams.home.name,
          logo: item.teams.home.logo,
          winner: item.teams.home.winner,
        },
        away: {
          id: item.teams.away.id,
          name: item.teams.away.name,
          logo: item.teams.away.logo,
          winner: item.teams.away.winner,
        },
      },
      goals: {
        home: item.goals.home,
        away: item.goals.away,
      },
      score: {
        halftime: {
          home: item.score.halftime.home,
          away: item.score.halftime.away,
        },
        fulltime: {
          home: item.score.fulltime.home,
          away: item.score.fulltime.away,
        },
        extratime: {
          home: item.score.extratime.home,
          away: item.score.extratime.away,
        },
        penalty: {
          home: item.score.penalty.home,
          away: item.score.penalty.away,
        },
      },
    }));
    return filteredData;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const newOdds = async (
  league: any,
  season: any,
  fixture: any
) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}odds?league=${league}&timezone=America/Argentina/Buenos_Aires&season=${season}&fixture=${fixture}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response[0];
    const filteredData = {
        league: {
            id: info.league.id,
            name: info.league.name,
            country: info.league.country,
            logo: info.league.logo,
            flag: info.league.flag,
            season: info.league.season
        },
        fixture: {
            id: info.fixture.id,
            timezone: info.fixture.timezone,
            date: info.fixture.date,
            timestamp: info.fixture.timestamp
        },
        odds: info.bookmakers
            .filter((bookmaker: any) => bookmaker.name === "NordicBet")
            .flatMap((bookmaker: any) =>
                bookmaker.bets
                    .filter((bet: any) => bet.name === "Match Winner")
                    .flatMap((bet: any) => bet.values)
            )
    };
    return filteredData;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
};

export const  newTeamApi = async (
  team: any,
  season: any,
  page:any
) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}players?team=${team}&season=${season}&page=${page}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response;
    const filteredData = info.map((item: any) => ({
      player: {
        id: item.player.id,
        name: item.player.name,
        photo: item.player.photo,
        injured: item.player.injured,
        statistics: {
          goals: item.statistics[0].goals.total,
          assists: item.statistics[0].goals.assists,
          cards: {
            yellow: item.statistics[0].cards.yellow,
            red: item.statistics[0].cards.red
          }
        }
      },
     
    }));
    const resultData = {
      page:{
        current:result.paging.current,
        total: result.paging.total
      },
      filteredData
    }
    return resultData;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
}

export const newApiLeague = async (search:any) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}leagues?search=${search}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response;
    const filteredData = info.map((item: any) =>  ({
      league: {
        id: item.league.id,
        name: item.league.name,
        logo: item.league.logo,
        type: item.league.type,
      },
    }));
    return filteredData
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
}

export const newMatchEnded = async (fixtureId:any) => {
  try {
    const baseUrl = process.env.NEW_API_URL;
    const url = `${baseUrl}fixtures/players?fixture=${fixtureId}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": process.env.NEW_API_KEY_APIFOOTBALL!,
      },
    });
    const result = await response.json();
    if (result.length === 0) {
      return { msg: "No hay partidos" };
    }
    const info = result.response;
    const filteredData = info.map((teamData: any) => ({
      team: {
          id: teamData.team.id,
          name: teamData.team.name,
          logo: teamData.team.logo,
          update: teamData.team.update,
          players: teamData.players.map((playerData: any) => ({
              id: playerData.player.id,
              name: playerData.player.name,
              photo: playerData.player.photo,
              statistics: {
                  rating: playerData.statistics[0].games.rating,
                  goals: playerData.statistics[0].goals.total,
                  assists: playerData.statistics[0].goals.assists,
                  yellowCards: playerData.statistics[0].cards.yellow,
                  redCards: playerData.statistics[0].cards.red
              }
          }))
      }
  }));
  return filteredData;
  } catch (error) {
    throw new Error(
      `Error al obtener el la informacion: ${(error as Error).message}`
    );
  }
}