import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingOrChildren from '../../components/shared/LoadingOrChildren';

it('should render a loading indicator and hide the children', () => {
	render(<LoadingOrChildren isLoading />);

	expect(screen.queryByTestId('loading-container')).toBeInTheDocument();
	expect(screen.queryByTestId('loading-text')).toBeInTheDocument();
});

it('should not render a loading indicator and show the children', () => {
	render(
		<LoadingOrChildren isLoading={false}>
			<div data-testid="testing-children" />
		</LoadingOrChildren>
	);

	expect(screen.queryByTestId('loading-container')).not.toBeInTheDocument();
	expect(screen.queryByTestId('loading-text')).not.toBeInTheDocument();
	expect(screen.queryByTestId('testing-children')).toBeInTheDocument();
});
