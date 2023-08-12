import styled from 'styled-components';

const getColor = props => {
    return(props.color)
}

export const Container = styled.div`
    display: block;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    max-width: 300px;
    margin: 0 auto;
    margin-top: 50px;
`;

export const UpperArea = styled.div`
    padding: 20px 0;
    text-align: center;
`;

export const CardTitle = styled.h2`
    text-transform: uppercase;
    font-weight: normal;
`;

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