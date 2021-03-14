import React from 'react';
import { Route } from 'react-router-dom';
import Filter from '../Filter';

interface Props {
	path: string;
	exact: boolean;
}

const RouteWrapper: React.FC<Props> = ({ children, path, exact }) => {
	return (
		<Route path={path} exact={exact}>
			<Filter />
			{children}
		</Route>
	);
};

export default RouteWrapper;
