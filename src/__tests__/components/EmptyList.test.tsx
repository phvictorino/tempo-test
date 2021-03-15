import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyList from '../../components/shared/EmptyList';

it('should render empty list component with the information text and icon', () => {
	render(<EmptyList />);

	expect(screen.queryByTestId('information-icon')).toBeInTheDocument();
	expect(screen.queryByTestId('information-text')).toBeInTheDocument();
});
