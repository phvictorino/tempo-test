import { AxiosResponse } from 'axios';
import { User } from 'types/user';
import axios from './axios';

export const getAllUsers = (): Promise<AxiosResponse<User[]>> =>
	axios.get<User[]>('users');
