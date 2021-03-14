import LoadingOrChildren from 'components/shared/LoadingOrChildren';
import PageTitle from 'components/shared/PageTitle';
import TeamContext from 'contexts/team';
import React, { useContext } from 'react';
import { MdArrowBack, MdChevronLeft } from 'react-icons/md';
import { Link } from 'react-router-dom';
import * as S from './styles';

const Team: React.FC = () => {
	const { usersOfSelectedTeam, selectedTeam, isLoading } = useContext(
		TeamContext
	);

	return (
		<LoadingOrChildren isLoading={isLoading}>
			<S.TitleContainer>
				<Link to="/">
					<MdArrowBack size={20} />
				</Link>
				<PageTitle>Team: {selectedTeam?.name || ''}</PageTitle>
			</S.TitleContainer>
			{JSON.stringify(usersOfSelectedTeam, null, 2)}
		</LoadingOrChildren>
	);
};

export default Team;
