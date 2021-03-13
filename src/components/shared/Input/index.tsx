import React from 'react';
import { MdSearch } from 'react-icons/md';
import * as S from './styles';

const Input: React.FC = () => {
	return (
		<S.Container>
			<input type="text" value="teste" />
			<button type="button">
				<MdSearch size={20} />
			</button>
		</S.Container>
	);
};

export default Input;
