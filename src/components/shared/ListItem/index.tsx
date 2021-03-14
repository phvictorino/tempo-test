import React from 'react';
import { MdOpenInNew } from 'react-icons/all';
import * as S from './styles';

interface Props {
	name: string;
	id: string;
	icon: React.ReactNode;
	onClick?: (id: string) => void;
}

const ListItem: React.FC<Props> = ({ name, id, icon, onClick }) => {
	const handleClick = (): void => {
		if (onClick) onClick(id);
	};

	return (
		<S.Container>
			<S.IconContainer>{icon}</S.IconContainer>
			<S.DataContainer>
				<dd>{name}</dd>
				<dl>ID: {id}</dl>
			</S.DataContainer>
			{onClick && (
				<S.ActionContainer type="button" onClick={handleClick}>
					<MdOpenInNew size={18} />
				</S.ActionContainer>
			)}
		</S.Container>
	);
};

export default ListItem;
