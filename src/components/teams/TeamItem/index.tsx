import React from 'react';
import { MdGroup, MdOpenInNew } from 'react-icons/all';
import * as S from './styles';

interface Props {
	name: string;
	id: string;
	onClick: (teamId: string) => void;
}

const TeamItem: React.FC<Props> = ({ name, id, onClick }) => {
	const handleClick = (): void => {
		onClick(id);
	};

	return (
		<S.Container>
			<S.IconContainer>
				<MdGroup size={25} />
			</S.IconContainer>
			<S.DataContainer>
				<dd>{name}</dd>
				<dl>ID: {id}</dl>
			</S.DataContainer>
			<S.ActionContainer type="button" onClick={handleClick}>
				<MdOpenInNew size={18} />
			</S.ActionContainer>
		</S.Container>
	);
};

export default TeamItem;
