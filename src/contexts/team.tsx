import { getAllTeams } from 'adapters/http/teams';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Team } from 'types/team';
import { User } from 'types/user';

interface TeamContextData {
	selectTeamId: (teamId: string) => void;
	users: User[];
	teams: Team[];
}

const TeamContext = React.createContext<TeamContextData>({} as TeamContextData);

export const TeamContextProvider: React.FC = ({ children }) => {
	const [teams, setTeams] = useState<Team[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const history = useHistory();

	useEffect(() => {
		getAllTeams().then(({ data }) => setTeams(data));
	}, []);

	const selectTeamId = (teamId: string): void => {
		history.push(`/team/${teamId}`);
	};

	return (
		<TeamContext.Provider value={{ selectTeamId, users, teams }}>
			{children}
		</TeamContext.Provider>
	);
};

export default TeamContext;
