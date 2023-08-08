import {Item} from 'components/profiles/info-index/info-index.styled';

export const InfoIndex = ({ stat, name }) => {
    return (
        <Item>
            <span>{name}</span>
            <span>{stat}</span>
        </Item>
    );
}