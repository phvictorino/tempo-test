import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 24px 0;

	display: grid;
	grid-template-columns: 8fr 1fr;

	input {
		margin: 0 auto;
		padding: 20px;
		border: none;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
		width: 100%;

		&:focus {
			outline: none;
		}
	}

	button {
		background-color: #ddd;
		border: none;
		border-left: 1px #eee solid;
		text-align: center;
		cursor: pointer;
		border-bottom-right-radius: 12px;
		border-top-right-radius: 12px;

		display: flex;
		justify-content: center;
		align-items: center;

		transition: background-color 0.2s;

		&:hover {
			background-color: #ccc;
		}

		&:focus {
			outline: none;
		}
	}
`;
