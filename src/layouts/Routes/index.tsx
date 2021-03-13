import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Team from 'pages/Team';
import Teams from 'pages/Teams';
import { TeamContextProvider } from 'contexts/team';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<TeamContextProvider>
					<Route path="/" exact>
						<Teams />
					</Route>
					<Route path="/team/:teamId" exact>
						<Team />
					</Route>
				</TeamContextProvider>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
