import styled from 'styled-components';

export const List = styled.ul`
    background-color: #90909040;
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
    border-top: 1px solid #999;

    :last-child {
        border-right: none;
    }
`;

export const ListItem = styled.li`
    box-sizing: border-box;
    width: calc(100% / 3);
    border-right: 1px solid #999;
    
`;