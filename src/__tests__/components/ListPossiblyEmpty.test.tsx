import React from 'react';
import { render, screen } from '@testing-library/react';

import ListPossiblyEmpty from 'components/shared/ListPossiblyEmpty';

it('should render an info of empty list', () => {
	render(<ListPossiblyEmpty listLength={0} />);

	expect(screen.getByTestId('empty-information')).toBeInTheDocument();
});

it('should not render an info of empty list and render the children', () => {
	render(
		<ListPossiblyEmpty listLength={1}>
			<div data-testid="testing-children" />
		</ListPossiblyEmpty>
	);

	expect(screen.getByTestId('empty-information')).toBeInTheDocument();
	expect(screen.getByTestId('testing-children')).toBeInTheDocument();
});
