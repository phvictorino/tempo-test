import styled from 'styled-components';
import colors from 'styles/colors';
import defaults from 'styles/defaults';

export const Container = styled.div`
	width: 100%;
	margin-top: 15px;
	background-color: white;
	border-radius: ${defaults.borderRadius};
	box-shadow: ${defaults.boxShadow};

	transition: box-shadow 0.2s;

	&:hover {
		box-shadow: 2px 2px 10px #ccc;
	}

	display: grid;
	grid-template-columns: 1fr 8fr 1fr;
	align-content: center;
`;

export const IconContainer = styled.div`
	display: grid;
	place-items: center;

	svg {
		padding: 0 20px;
		color: ${colors.primary};
	}
`;

export const DataContainer = styled.div`
	border-left: 1px solid #eee;
	padding: 20px;

	dd {
		margin-left: 12px;
	}

	dl {
		margin-left: 12px;
		color: #aaa;
		font-size: 0.8rem;
		margin-top: 6px;
	}
`;

export const ActionContainer = styled.button`
	display: grid;
	place-items: center;
	background-color: transparent;
	border: none;
	cursor: pointer;

	color: #000;
	transition: color 0.2s;

	&:focus {
		outline: none;
	}

	&:hover {
		color: #aaa;
	}
`;
