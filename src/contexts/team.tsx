import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface TeamContextData {
	selectedTeamId: string;
	selectTeamId: (teamId: string) => void;
}

const TeamContext = React.createContext<TeamContextData>({} as TeamContextData);

export const TeamContextProvider: React.FC = ({ children }) => {
	const [selectedTeamId, setSelectedTeamId] = useState('');
	const history = useHistory();

	const selectTeamId = (teamId: string): void => {
		setSelectedTeamId(teamId);
		history.push(`/team/${teamId}`);
	};

	return (
		<TeamContext.Provider value={{ selectedTeamId, selectTeamId }}>
			{children}
		</TeamContext.Provider>
	);
};

export default TeamContext;
