import styled from 'styled-components';

export const Avatar = styled.img`
    background-color: #999;
    border-radius: 10px;
    max-height: 100px;
    margin: 0 20px;
`;

export const Name = styled.p`
    font-size: 20px;
`;

const getStatusColor = ({ $status }) => {
    switch ($status) {
        case 'true':
            return 'green';
        case 'false':
            return 'red';
        dafault:
            return 'grey';
    }
}

export const Status = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${getStatusColor};
`;