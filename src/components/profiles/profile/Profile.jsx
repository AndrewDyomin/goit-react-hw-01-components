import { Card } from 'components/profiles/card/Card';
import { Info } from 'components/profiles/info/Info';
import userData from 'components/profiles/path/user';
import {ProfileCard} from 'components/profiles/profile/Profile.styled'

export const Profile = () => {
    return (
      <ProfileCard>
        <Card user={userData}/>
        <Info user={userData}/>
      </ProfileCard>
    );
  };
  