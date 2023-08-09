import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    margin: 0 auto;
    margin-top: 50px;
`;

export const List = styled.ul`
:first-child {
    margin-top: 0;
}
`;

export const ListItem = styled.li`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 50px;
    align-items: center;
    padding: 5px 15px;
`;