import TeamContext from 'contexts/team';
import React, { useContext, useState } from 'react';
import { MdSearch } from 'react-icons/md';
import * as S from './styles';

const Input: React.FC = () => {
	const [filter, setFilter] = useState('');

	const { handleSubmitFilter } = useContext(TeamContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFilter(event.target.value);
	};

	const handleSubmit = (): void => {
		handleSubmitFilter(filter);
	};

	return (
		<S.Container>
			<input
				placeholder="Filter something..."
				type="text"
				value={filter}
				onChange={handleChange}
			/>
			<button type="submit" onClick={handleSubmit}>
				<MdSearch size={20} />
			</button>
		</S.Container>
	);
};

export default Input;
