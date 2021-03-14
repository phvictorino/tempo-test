import styled from 'styled-components';
import colors from 'styles/colors';
import defaults from 'styles/defaults';

export const Container = styled.div`
	width: 100%;
	height: 100px;
	background-color: white;
	border-radius: ${defaults.borderRadius};
	box-shadow: ${defaults.boxShadow};
	margin-top: 10px;

	display: grid;
	place-items: center;

	svg {
		color: ${colors.primary};
	}
`;
