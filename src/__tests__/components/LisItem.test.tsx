import React from 'react';
import { render, screen } from '@testing-library/react';
import { MdPerson } from 'react-icons/md';
import ListItem from '../../components/shared/ListItem';

it('should render a list item component with action', () => {
	render(
		<ListItem
			name="testing"
			id="123"
			icon={<MdPerson />}
			onClick={() => alert('testing')}
		/>
	);

	expect(screen.queryByTestId('item-action')).toBeInTheDocument();
});

it('should render a list item component without action', () => {
	render(<ListItem name="testing" id="123" icon={<MdPerson />} />);

	expect(screen.queryByTestId('item-action')).not.toBeInTheDocument();
});
