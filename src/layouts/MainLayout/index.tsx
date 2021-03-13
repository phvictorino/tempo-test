import Input from 'components/shared/Input';
import React from 'react';
import * as S from './styles';

const MainLayout: React.FC = ({ children }) => {
	return (
		<S.Container>
			<Input />
			{children}
		</S.Container>
	);
};

export default MainLayout;
