import React, { useContext } from 'react';
import TeamItem from 'components/teams/TeamItem';
import TeamContext from 'contexts/team';
import PageTitle from 'components/shared/PageTitle';
import { Team } from 'types/team';

const Teams: React.FC = () => {
	const { handleSelectTeam, teams } = useContext(TeamContext);

	const handleClickTeam = (team: Team): void => {
		handleSelectTeam(team);
	};

	return (
		<div>
			<PageTitle>Teams</PageTitle>
			<dl>
				{teams.map(({ name, id }) => (
					<TeamItem
						name={name}
						id={id}
						onClick={() => handleClickTeam({ id, name })}
						key={id}
					/>
				))}
			</dl>
		</div>
	);
};
export default Teams;
