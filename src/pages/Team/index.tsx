import PageTitle from 'components/shared/PageTitle';
import TeamContext from 'contexts/team';
import React, { useContext } from 'react';

const Team: React.FC = () => {
	const { usersOfSelectedTeam, selectedTeam } = useContext(TeamContext);

	return (
		<div>
			<PageTitle>Team: {selectedTeam?.name || ''}</PageTitle>
			{JSON.stringify(usersOfSelectedTeam, null, 2)}
		</div>
	);
};

export default Team;
