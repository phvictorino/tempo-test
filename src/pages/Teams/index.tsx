import React, { useContext } from 'react';
import ListItem from 'components/shared/ListItem';
import ListPossiblyEmpty from 'components/shared/ListPossiblyEmpty';
import LoadingOrChildren from 'components/shared/LoadingOrChildren';
import PageTitle from 'components/shared/PageTitle';
import TeamContext from 'contexts/team';
import { MdGroup } from 'react-icons/md';
import { Team } from 'types/team';

const Teams: React.FC = () => {
	const { handleSelectTeam, filteredTeams, isLoading } = useContext(
		TeamContext
	);

	const handleClickTeam = (team: Team): void => {
		handleSelectTeam(team);
	};

	return (
		<LoadingOrChildren isLoading={isLoading}>
			<PageTitle>Teams</PageTitle>
			<ListPossiblyEmpty listLength={filteredTeams.length}>
				<dl data-testid="teams-list">
					{filteredTeams.map(({ name, id }) => (
						<ListItem
							name={name}
							id={id}
							onClick={() => handleClickTeam({ id, name })}
							key={id}
							icon={<MdGroup size={25} />}
						/>
					))}
				</dl>
			</ListPossiblyEmpty>
		</LoadingOrChildren>
	);
};
export default Teams;
