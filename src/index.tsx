import React from 'react';
import ReactDOM from 'react-dom';

import Routes from 'layouts/Routes';
import MainLayout from './layouts/MainLayout';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<MainLayout>
			<Routes />
		</MainLayout>
	</React.StrictMode>,
	document.getElementById('root')
);
