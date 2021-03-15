import React from 'react';
import EmptyList from '../EmptyList';

interface Props {
	listLength: number;
}

const ListPossiblyEmpty: React.FC<Props> = ({ listLength, children }) => {
	return (
		<div data-testid="empty-information">
			{listLength > 0 ? children : <EmptyList />}
		</div>
	);
};

export default ListPossiblyEmpty;
