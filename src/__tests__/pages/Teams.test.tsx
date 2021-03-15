/* eslint-disable @typescript-eslint/no-empty-function */

import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamContext from '../../contexts/team';
import Teams from '../../pages/Teams';
import { Team } from '../../types/team';

const testTeam: Team = {
	name: 'Test Team',
	id: '1234',
};

function renderTeamsContext(): void {
	render(
		<TeamContext.Provider
			value={{
				filteredTeams: [testTeam],
				filteredUsersOfTeam: [],
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
			<Teams />
		</TeamContext.Provider>
	);
}

it('Teams page should list the teams using Context', () => {
	renderTeamsContext();
	expect(screen.queryByTestId('teams-list')).toBeInTheDocument();
	expect(screen.queryByTestId('item-id')?.textContent).toContain(testTeam.id);
});
