import styled from 'styled-components';

const getColor = props => {
    return(props.color)
}

export const StatsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    background-color: ${getColor};
    width: calc(100% / 5);
    padding: 10px;
    text-align: center;
    color: #fff;
`;

export const StatsTopic = styled.span`
    font-size: 12px;
`;
export const StatsValue = styled.span`
    font-size: 20px;
`;