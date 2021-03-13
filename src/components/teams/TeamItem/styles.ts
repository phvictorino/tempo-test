import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from 'styles/colors';

export const Container = styled.div`
	width: 100%;
	margin-top: 10px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 1px 1px 5px #ccc;

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
		color: #ccc;
		font-size: 0.8rem;
		margin-top: 6px;
	}
`;

export const ActionContainer = styled(Link)`
	display: grid;
	place-items: center;

	color: #000;
	transition: color 0.2s;

	&:hover {
		color: #aaa;
	}
`;
