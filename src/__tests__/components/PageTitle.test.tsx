import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTitle from '../../components/shared/PageTitle';

it('should render a page title in the h2 element', () => {
	render(<PageTitle>Testing title</PageTitle>);

	expect(screen.queryByTestId('title')).toBeInTheDocument();
	expect(screen.queryByTestId('title')?.textContent).toEqual('Testing title');
});
