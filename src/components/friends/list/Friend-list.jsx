import friends from '../path/friends.json';
import { FriendCard } from '../card/Card';
import { Container, List, ListItem } from './Friend-list.styled';

export const FriendList = () => {
    return (
        <Container>
            <List>
                {friends.map(friend => (
                    <ListItem key={friend.id}>
                        <FriendCard friend={friend} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};