import { Item, Topic, Value } from 'components/profiles/info-index/info-index.styled';

export const InfoIndex = ({ stat, name }) => {
    return (
        <Item>
            <Topic>{name}</Topic>
            <Value>{stat}</Value>
        </Item>
    );
}