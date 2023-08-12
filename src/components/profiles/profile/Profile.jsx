import {InfoIndex} from 'components/profiles/info-index/info-index';
import {ProfileCard, FaceCard, FaceImage, FaceName, FaceContacts, List, ListItem } from 'components/profiles/profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
      <ProfileCard>
        <FaceCard>
          <FaceImage
            src={avatar}
            alt="User avatar"
          />
          <FaceName className="name">{username}</FaceName>
          <FaceContacts className="tag">@{tag}</FaceContacts>
          <FaceContacts className="location">{location}</FaceContacts>
        </FaceCard>
        <List>
        <ListItem>
                <InfoIndex name='Followers' stat={stats.followers}/>
          </ListItem>
          <ListItem>
                <InfoIndex name='Views' stat={stats.views}/>
          </ListItem>
          <ListItem>
                  <InfoIndex name='likes' stat={stats.likes}/>
          </ListItem>
        </List>
      </ProfileCard>
    );
  };
  