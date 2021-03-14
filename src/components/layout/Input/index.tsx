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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		handleSubmitFilter(filter);
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

export default Input;
