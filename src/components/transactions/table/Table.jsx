import transactions from '../path/transactions';
import { Transaction } from '../item/Item';
import { Table, Line, Header, HeaderList } from './Table.styled';

export const TransactionHistory = () => {
    return (
        <Table>
            <thead>
                <HeaderList>
                    <Header key='1'>Type</Header>
                    <Header key='2'>Amount</Header>
                    <Header key='3'>Currency</Header>
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