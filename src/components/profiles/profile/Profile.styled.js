import styled from 'styled-components';

export const ProfileCard = styled.div`
    border-radius: 10px;
    max-width: 300px;
    display: block;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
`;

export const FaceCard = styled.div`
    display: block;
    padding: 8%;

`;

export const FaceImage = styled.img`
    max-width: 50%;
    background-color: #90909090;
    border-radius: 50%;
    margin: 0 auto;
`;

export const FaceName = styled.p`
    font-size: 21px;
    font-weight: bold;
`;

export const FaceContacts = styled.p`
    color: #555;
`;

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