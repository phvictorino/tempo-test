import React from 'react';
import EmptyList from '../EmptyList';

interface Props {
	listLength: number;
}

const ListPossiblyEmpty: React.FC<Props> = ({ listLength, children }) => {
	return <>{listLength > 0 ? children : <EmptyList />}</>;
};

export default ListPossiblyEmpty;
