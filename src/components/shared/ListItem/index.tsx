import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import * as S from './styles';

interface Props {
	name: string;
	id: string;
	icon: React.ReactNode;
	onClick?: () => void;
}

const ListItem: React.FC<Props> = ({ name, id, icon, onClick }) => {
	const handleClick = (): void => {
		if (onClick) onClick();
	};

	return (
		<S.Container>
			<S.IconContainer data-testid="item-icon">{icon}</S.IconContainer>
			<S.DataContainer>
				<dd data-testid="item-name">{name}</dd>
				<dl data-testid="item-id">ID: {id}</dl>
			</S.DataContainer>
			{onClick && (
				<S.ActionContainer
					data-testid="item-action"
					type="button"
					onClick={handleClick}
				>
					<MdOpenInNew size={18} />
				</S.ActionContainer>
			)}
		</S.Container>
	);
};

export default ListItem;
