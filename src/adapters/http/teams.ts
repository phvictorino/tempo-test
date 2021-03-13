import { AxiosResponse } from 'axios';
import { Team } from 'types/team';
import axios from './axios';

export const getAllTeams = (): Promise<AxiosResponse<Team[]>> =>
	axios.get<Team[]>('teams');
