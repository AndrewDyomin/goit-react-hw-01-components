import transactions from '../path/transactions';
import { Transaction } from '../item/Item';
import { Table, Line, Header, HeaderList } from './Table.styled';

export const TransactionHistory = () => {
    return (
        <Table>
            <thead>
                <HeaderList>
                    <Header>Type</Header>
                    <Header>Amount</Header>
                    <Header>Currency</Header>
                </HeaderList>
            </thead>
            <Line>
                {transactions.map(item => (
                    <Transaction item={item}/>
                ))}
            </Line>
        </Table>
    )
};