import { getAllTeams } from 'adapters/http/teams';
import { getAllUsers } from 'adapters/http/users';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Team } from 'types/team';
import { User } from 'types/user';

interface TeamContextData {
	filteredUsersOfTeam: User[];
	filteredTeams: Team[];
	selectedTeam: Team | undefined;
	isLoading: boolean;
	handleSelectTeam: (team: Team) => void;
	handleFilterTeams: (value: string) => void;
	handleFilterUsers: (value: string) => void;
}

const TeamContext = React.createContext<TeamContextData>({} as TeamContextData);

export const TeamContextProvider: React.FC = ({ children }) => {
	const [allTeams, setAllTeams] = useState<Team[]>([]);
	const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
	const [allUsersOfTeam, setAllUsersOfTeam] = useState<User[]>([]);
	const [filteredUsersOfTeam, setFilteredUsersOfTeam] = useState<User[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<Team | undefined>(undefined);
	const [isLoading, setIsLoading] = useState(true);
	const history = useHistory();

	const findAllTeams = (): void => {
		getAllTeams()
			.then(({ data }) => {
				setAllTeams(data);
				setFilteredTeams(data);
			})
			.finally(() => setIsLoading(false));
	};

	useEffect(() => {
		findAllTeams();
	}, []);

	const handleSelectTeam = async (newTeam: Team): Promise<void> => {
		setIsLoading(true);
		history.push(`/team/${newTeam.id}`);
		setSelectedTeam(newTeam);
		const { data: allUsers } = await getAllUsers();
		const users = allUsers.filter((user) => user.teamId.includes(newTeam.id));
		setAllUsersOfTeam(users);
		setFilteredUsersOfTeam(users);
		setIsLoading(false);
	};

	const handleFilterTeams = (filter: string): void => {
		if (filter) {
			setFilteredTeams(
				allTeams.filter((team) =>
					team.name.toLowerCase().includes(filter.toLowerCase())
				)
			);
		} else {
			setFilteredTeams(allTeams);
		}
	};

	const handleFilterUsers = (filter: string): void => {
		if (filter) {
			setFilteredUsersOfTeam(
				allUsersOfTeam.filter((user) =>
					user.name.toLowerCase().includes(filter.toLowerCase())
				)
			);
		} else {
			setFilteredUsersOfTeam(allUsersOfTeam);
		}
	};

	return (
		<TeamContext.Provider
			value={{
				filteredUsersOfTeam,
				filteredTeams,
				selectedTeam,
				isLoading,
				handleSelectTeam,
				handleFilterTeams,
				handleFilterUsers,
			}}
		>
			{children}
		</TeamContext.Provider>
	);
};

export default TeamContext;
