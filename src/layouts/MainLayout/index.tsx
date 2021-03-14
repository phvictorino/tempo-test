import React from 'react';
import * as S from './styles';

const MainLayout: React.FC = ({ children }) => {
	return (
		<S.Container>
			<S.AppTitle>Team Management System</S.AppTitle>
			{children}
		</S.Container>
	);
};

export default MainLayout;
