import { Line, LineItem } from './Item.styled';

export const Transaction = ({ item }) => {
    return (
        <Line key={item.id}>
            <LineItem>{item.type}</LineItem>
            <LineItem>{item.amount}</LineItem>
            <LineItem>{item.currency}</LineItem>
        </Line>
    );
};