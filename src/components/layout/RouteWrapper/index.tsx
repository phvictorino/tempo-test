import React from 'react';
import { Route } from 'react-router-dom';
import Input from '../Input';

interface Props {
	path: string;
	exact: boolean;
}

const RouteWrapper: React.FC<Props> = ({ children, path, exact }) => {
	return (
		<Route path={path} exact={exact}>
			<Input />
			{children}
		</Route>
	);
};

export default RouteWrapper;
