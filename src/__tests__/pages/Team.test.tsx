/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import TeamContext from '../../contexts/team';
import { User } from '../../types/user';
import Team from '../../pages/Team';

const testUser: User = {
	name: 'Test User',
	id: 'u1234',
	teamId: ['t1234'],
};

function renderTeamsContext(): void {
	const history = createMemoryHistory();
	render(
		<Router history={history}>
			<TeamContext.Provider
				value={{
					filteredTeams: [],
					filteredUsersOfTeam: [testUser],
					handleFilterTeams: () => {},
					handleFilterUsers: () => {},
					handleSelectTeam: () => {},
					isLoading: false,
					selectedTeam: {
						id: 'test',
						name: 'test',
					},
				}}
			>
				<Team />
			</TeamContext.Provider>
		</Router>
	);
}

it('Team page should list the users from Context', () => {
	renderTeamsContext();
	expect(screen.queryByTestId('users-list')).toBeInTheDocument();
	expect(screen.queryByTestId('item-id')?.textContent).toContain(testUser.id);
});
