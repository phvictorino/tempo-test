import React from 'react';
import * as S from './styles';

const PageTitle: React.FC = ({ children }) => {
	return <S.Title>{children}</S.Title>;
};

export default PageTitle;
