import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Team from 'pages/Team';
import Teams from 'pages/Teams';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Teams />
				</Route>
				<Route path="/team/:teamId" exact>
					<Team />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
