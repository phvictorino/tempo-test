import LoadingOrChildren from 'components/shared/LoadingOrChildren';
import PageTitle from 'components/shared/PageTitle';
import TeamContext from 'contexts/team';
import React, { useContext } from 'react';
import { MdArrowBack, MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ListItem from '../../components/shared/ListItem';
import * as S from './styles';

const Team: React.FC = () => {
	const { filteredUsersOfTeam, selectedTeam, isLoading } = useContext(
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
			{filteredUsersOfTeam.map((user) => (
				<ListItem
					key={user.id}
					name={user.name}
					id={user.id}
					icon={<MdPerson size={25} />}
				/>
			))}
		</LoadingOrChildren>
	);
};

export default Team;
