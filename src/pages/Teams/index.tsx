import React, { useContext } from 'react';
import ListItem from 'components/shared/ListItem';
import TeamContext from 'contexts/team';
import PageTitle from 'components/shared/PageTitle';
import { Team } from 'types/team';
import EmptyList from 'components/shared/EmptyList';
import LoadingOrChildren from 'components/shared/LoadingOrChildren';

const Teams: React.FC = () => {
	const { handleSelectTeam, teams, isLoading } = useContext(TeamContext);

	const handleClickTeam = (team: Team): void => {
		handleSelectTeam(team);
	};

	return (
		<LoadingOrChildren isLoading={isLoading}>
			<PageTitle>Teams</PageTitle>
			{teams.length > 0 ? (
				<dl>
					{teams.map(({ name, id }) => (
						<ListItem
							name={name}
							id={id}
							onClick={() => handleClickTeam({ id, name })}
							key={id}
						/>
					))}
				</dl>
			) : (
				<EmptyList />
			)}
		</LoadingOrChildren>
	);
};
export default Teams;
