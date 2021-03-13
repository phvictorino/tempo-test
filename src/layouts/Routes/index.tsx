import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Team from 'pages/Team';
import Teams from 'pages/Teams';
import { TeamContextProvider } from 'contexts/team';
import RouteWrapper from 'components/layout/RouteWrapper';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<TeamContextProvider>
					<RouteWrapper path="/" exact>
						<Teams />
					</RouteWrapper>
					<RouteWrapper path="/team/:teamId" exact>
						<Team />
					</RouteWrapper>
				</TeamContextProvider>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
