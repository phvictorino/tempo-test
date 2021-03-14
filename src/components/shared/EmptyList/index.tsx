import React from 'react';
import { MdInfo } from 'react-icons/md';
import * as S from './styles';

const EmptyList: React.FC = () => {
	return (
		<S.Container>
			<MdInfo size={40} />
			<span>No records found.</span>
		</S.Container>
	);
};

export default EmptyList;
