import { List, ListItem } from 'components/profiles/info/Info.styled';
import {InfoIndex} from 'components/profiles/info-index/info-index';

export const Info = ({ user }) => {
    return (
      <List>
          <ListItem>
                <InfoIndex name='Followers' stat={user.stats.followers}/>
          </ListItem>
          <ListItem>
                <InfoIndex name='Views' stat={user.stats.views}/>
          </ListItem>
          <ListItem>
                 <InfoIndex name='likes' stat={user.stats.likes}/>
          </ListItem>
      </List>
    );
  };
  