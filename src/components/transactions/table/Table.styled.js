import styled from 'styled-components';

export const Table = styled.table`
    table-layout: fixed;
    width: 600px;
    border-collapse: collapse;
    margin: 50px auto;
    text-align: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const HeaderList = styled.tr`
:first-child {
    border-radius: 5px 0 0 0;
}

:nth-child(2) {
    border-radius: 0;
}

:last-child {
    border-right: none;
    border-radius: 0 5px 0 0;
}
`;

export const Header = styled.th`
    font-weight: normal;
    background-color: #2592c4;
    border-right: 1px solid #999;
    border-radius: 5px 5px 0 0;
    padding: 15px 0;
    text-transform: uppercase;
    color: #f9f9f9;
`;

export const Line = styled.tbody`
tr:nth-child(2n + 2) {
    background-color: #b9bbbc;
  }
`;

