import { Card } from 'components/profiles/Card';
import { Info } from 'components/profiles/Info';
import userData from 'components/profiles/path/user';

export const Profile = () => {
    return (
      <div>
        <Card user={userData}/>
        <Info user={userData}/>
      </div>
    );
  };
  