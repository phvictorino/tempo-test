import React, { useEffect, useState } from 'react';
import TeamItem from 'components/teams/TeamItem';
import { getAllTeams } from 'services/teams';
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
			{teams.map((team) => (
				<TeamItem name={team.name} />
			))}
		</S.Container>
	);
};
export default List;
