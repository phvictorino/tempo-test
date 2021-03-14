import { getAllTeams } from 'adapters/http/teams';
import { getAllUsers } from 'adapters/http/users';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Team } from 'types/team';
import { User } from 'types/user';

interface TeamContextData {
	usersOfSelectedTeam: User[];
	teams: Team[];
	selectedTeam: Team | undefined;
	isLoading: boolean;
	handleSelectTeam: (team: Team) => void;
	handleSubmitFilter: (value: string) => void;
}

const TeamContext = React.createContext<TeamContextData>({} as TeamContextData);

export const TeamContextProvider: React.FC = ({ children }) => {
	const [teams, setTeams] = useState<Team[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const [usersOfSelectedTeam, setUsersOfSelectedTeam] = useState<User[]>([]);
	const history = useHistory();

	const fillTeams = (): void => {
		getAllTeams()
			.then(({ data }) => setTeams(data))
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		fillTeams();
	}, []);

	const handleSelectTeam = async (newTeam: Team): Promise<void> => {
		setIsLoading(true);
		history.push(`/team/${newTeam.id}`);
		setSelectedTeam(newTeam);
		const { data: allUsers } = await getAllUsers();
		setUsersOfSelectedTeam(
			allUsers.filter((user) => user.teamId.includes(newTeam.id))
		);
		setIsLoading(false);
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
				usersOfSelectedTeam,
				teams,
				selectedTeam,
				isLoading,
				handleSelectTeam,
				handleSubmitFilter,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
};

export default TeamContext;
