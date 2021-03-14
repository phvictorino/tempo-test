import EmptyList from 'components/shared/EmptyList';
import ListItem from 'components/shared/ListItem';
import LoadingOrChildren from 'components/shared/LoadingOrChildren';
import PageTitle from 'components/shared/PageTitle';
import TeamContext from 'contexts/team';
import React, { useContext } from 'react';
import { MdGroup } from 'react-icons/all';
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
			{filteredTeams.length > 0 ? (
				<dl>
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
			) : (
				<EmptyList />
			)}
		</LoadingOrChildren>
	);
};
export default Teams;
