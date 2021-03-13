import React, { useContext, useEffect, useState } from 'react';
import TeamItem from 'components/teams/TeamItem';
import { getAllTeams } from 'adapters/teams';
import { Team } from 'types/team';
import TeamContext from 'contexts/team';
import * as S from './styles';

const List: React.FC = () => {
	const [teams, setSteams] = useState<Team[]>([]);
	const { selectTeamId } = useContext(TeamContext);

	useEffect(() => {
		const resultTeams = getAllTeams();
		setSteams(resultTeams);
	}, []);

	const handleClickTeam = (teamId: string): void => {
		selectTeamId(teamId);
	};

	return (
		<S.Container>
			<h2>Teams</h2>
			<dl>
				{teams.map(({ name, id }) => (
					<TeamItem name={name} id={id} onClick={handleClickTeam} key={id} />
				))}
			</dl>
		</S.Container>
	);
};
export default List;
