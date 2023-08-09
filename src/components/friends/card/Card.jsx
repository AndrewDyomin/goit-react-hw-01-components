import { Status, Avatar, Name } from './Card.styled';

export const FriendCard = ({ friend }) => {
    return (
        <>
            <Status status={friend.isOnline.toString()}></Status>
            <Avatar 
            src={friend.avatar} 
            alt="User avatar"
            />
            <Name>{friend.name}</Name>
        </>
    );
};