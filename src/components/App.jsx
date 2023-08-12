import user from 'components/profiles/path/user';
import data from 'components/stat/path/data.json';
import friends from './friends/path/friends.json';
import transactions from './transactions/path/transactions'
import { Profile } from 'components/profiles/profile/Profile';
import { Statistics } from 'components/stat/statistic/Statistics';
import { FriendList } from './friends/list/Friend-list';
import { TransactionHistory } from './transactions/table/Table';

export const App = () => {
  return (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </>
  );
};
