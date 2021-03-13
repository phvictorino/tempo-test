import React, { useContext } from 'react';
import TeamItem from 'components/teams/TeamItem';
import TeamContext from 'contexts/team';
import PageTitle from 'components/shared/PageTitle';

const Teams: React.FC = () => {
	const { selectTeamId, teams } = useContext(TeamContext);

	const handleClickTeam = (teamId: string): void => {
		selectTeamId(teamId);
	};

	return (
		<div>
			<PageTitle>Teams</PageTitle>
			<dl>
				{teams.map(({ name, id }) => (
					<TeamItem name={name} id={id} onClick={handleClickTeam} key={id} />
				))}
			</dl>
		</div>
	);
};
export default Teams;
