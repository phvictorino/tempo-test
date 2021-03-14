import TeamContext from 'contexts/team';
import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

const Filter: React.FC = () => {
	const [filter, setFilter] = useState('');
	const { pathname } = useLocation();

	const { handleFilterTeams, handleFilterUsers } = useContext(TeamContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFilter(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const currentRoute = pathname.split('/')[1];
		const mapConditions = new Map([
			['teams', handleFilterTeams],
			['team', handleFilterUsers],
		]);
		const filterFunction = mapConditions.get(currentRoute);
		if (filterFunction) filterFunction(filter);
	};

	return (
		<S.Container>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="Filter something..."
					type="text"
					value={filter}
					onChange={handleChange}
				/>
				<button type="submit">
					<MdSearch size={20} />
				</button>
			</form>
		</S.Container>
	);
};

export default Filter;
