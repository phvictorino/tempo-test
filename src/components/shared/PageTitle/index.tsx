import React from 'react';
import * as S from './styles';

const PageTitle: React.FC = ({ children }) => {
	return <S.Title data-testid="title">{children}</S.Title>;
};

export default PageTitle;
