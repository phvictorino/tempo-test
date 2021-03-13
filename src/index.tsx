import React from 'react';
import ReactDOM from 'react-dom';
import Teams from './pages/Teams';
import MainLayout from './layouts/MainLayout';
import { GlobalStyle } from './styles/global';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<MainLayout>
			<Teams />
		</MainLayout>
	</React.StrictMode>,
	document.getElementById('root')
);
