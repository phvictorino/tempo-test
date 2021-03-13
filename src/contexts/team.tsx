import { getAllTeams } from 'adapters/http/teams';
import { getAllUsers } from 'adapters/http/users';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Team } from 'types/team';
import { User } from 'types/user';

interface TeamContextData {
	usersOfSelectedTeam: User[];
	teams: Team[];
	selectTeamId: (teamId: string) => void;
	handleSubmitFilter: (value: string) => void;
}

const TeamContext = React.createContext<TeamContextData>({} as TeamContextData);

export const TeamContextProvider: React.FC = ({ children }) => {
	const [teams, setTeams] = useState<Team[]>([]);
	const [usersOfSelectedTeam, setUsersOfSelectedTeam] = useState<User[]>([]);
	const history = useHistory();

	const fillTeams = (): void => {
		getAllTeams().then(({ data }) => setTeams(data));
	};

	useEffect(() => {
		fillTeams();
	}, []);

	const selectTeamId = async (teamId: string): Promise<void> => {
		const { data: allUsers } = await getAllUsers();
		setUsersOfSelectedTeam(
			allUsers.filter((user) => user.teamId.includes(teamId))
		);
		history.push(`/team/${teamId}`);
	};

	const handleSubmitFilter = (filter: string): void => {
		if (filter) {
			setTeams(
				teams.filter((team) =>
					team.name.toLowerCase().includes(filter.toLowerCase())
				)
			);
		} else {
			fillTeams();
		}
	};

	return (
		<TeamContext.Provider
			value={{
				selectTeamId,
				usersOfSelectedTeam,
				teams,
				handleSubmitFilter,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
};

export default TeamContext;
