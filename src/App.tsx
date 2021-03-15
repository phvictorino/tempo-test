import React from 'react';
import Routes from './layouts/Routes';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => (
	<MainLayout>
		<Routes />
	</MainLayout>
);

export default App;
