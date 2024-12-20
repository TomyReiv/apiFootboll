import { Request, Response } from "express";
import dotenv from "dotenv";
import {
  getAllMatches,
  getCountries,
  getLeague,
  getMatch,
  getPlayer,
  getPOnePlayer,
  getRecords,
  getStandings,
  getTeam,
  newApiLeague,
  newFixture,
  newMatchEnded,
  newOdds,
  newTeamApi,
} from "../services/api.service";
import { httpResponse } from "../utils/enumsErrors";

const HttpResponse = new httpResponse();
dotenv.config();

export const getMatchApi = async (req: Request, res: Response) => {
  try {
    const { from, to, match_id, league } = req.query;

    const result = await getMatch(from, to, match_id, league);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getAllMatchesApi = async (req: Request, res: Response) => {
  try {
    const from = req.query.from as any | undefined;
    const to = req.query.to as any | undefined;
    const { match_id, league } = req.query;
    const matches = await getAllMatches(from, to, match_id, league);
    if (!matches) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: Matches not found`
      );
    }

    return HttpResponse.OK(res, matches);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getRecord = async (req: Request, res: Response) => {
  try {
    const { to, league, team_a, team_b } = req.query;

    const result = await getRecords(to, league, team_a, team_b);

    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }

    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getCountriesApi = async (req: Request, res: Response) => {
  try {
    const result = await getCountries();
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getLeagueApi = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const result = await getLeague(id);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getTeamApi = async (req: Request, res: Response) => {
  try {
    const { id } = req.query;
    const result = await getTeam(id);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getPlayerApi = async (req: Request, res: Response) => {
  try {
    const { id, tid } = req.query;
    const result = await getPlayer(id, tid);

    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getOnePlayerApi = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const result = await getPOnePlayer(name);

    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};
export const getAllstandings = async (req: Request, res: Response) => {
  try {
    const { id, season } = req.query;
    const result = await getStandings(id, season);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};
export const getNewFixture = async (req: Request, res: Response) => {
  try {
    const { from, to, season, league } = req.query;
    const result = await newFixture(league, season, from, to);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data: ${result.statusText}`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getNewOdds = async (req: Request, res: Response) => {
  try {
    const { fixture, season, league } = req.query;
    const result = await newOdds(league, season, fixture);
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getNewTeams = async (req: Request, res: Response) => {
  try {
    const { team, season, page } = req.query;
    const result = await newTeamApi(team, season, page); 
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getNewLeagues = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    const result = await newApiLeague(search); 
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};

export const getNewMatchEnded = async (req: Request, res: Response) => {
  try {
    const { fixtureId } = req.query;
    const result = await newMatchEnded(fixtureId); 
    if (!result) {
      return HttpResponse.INVALID_TYPE_ERROR(
        res,
        `Error fetching data`
      );
    }
    return HttpResponse.OK(res, result);
  } catch (error) {
    return HttpResponse.Error(res, (error as Error).message);
  }
};