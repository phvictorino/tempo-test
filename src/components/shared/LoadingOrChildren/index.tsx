import React from 'react';
import { ScaleLoader } from 'react-spinners';
import * as S from './styles';

interface Props {
	isLoading: boolean;
}

const LoadingOrChildren: React.FC<Props> = ({ isLoading, children }) => (
	<>
		{isLoading ? (
			<S.Container data-testid="loading-container">
				<ScaleLoader />
				<span data-testid="loading-text">Loading...</span>
			</S.Container>
		) : (
			children
		)}
	</>
);

export default LoadingOrChildren;
