import {List} from 'components/profiles/info/Info.styled';
import {InfoIndex} from 'components/profiles/info-index/info-index';

export const Info = ({ user }) => {
    return (
      <List>
          <li>
                <InfoIndex name='Followers' stat={user.stats.followers}/>
          </li>
          <li>
                <InfoIndex name='Views' stat={user.stats.views}/>
          </li>
          <li>
                 <InfoIndex name='likes' stat={user.stats.likes}/>
          </li>
      </List>
    );
  };
  