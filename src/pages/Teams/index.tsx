import React, { useEffect, useState } from 'react';
import TeamItem from 'components/teams/TeamItem';
import { getAllTeams } from 'adapters/teams';
import { Team } from 'types/team';
import * as S from './styles';

const List: React.FC = () => {
	const [teams, setSteams] = useState<Team[]>([]);

	useEffect(() => {
		const resultTeams = getAllTeams();
		setSteams(resultTeams);
	}, []);

	return (
		<S.Container>
			<h2>Teams</h2>
			<dt>
				{teams.map(({ name, id }) => (
					<TeamItem name={name} id={id} />
				))}
			</dt>
		</S.Container>
	);
};
export default List;
